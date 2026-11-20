'use client';

import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import Link from 'next/link';

type NavEntry = {
  id: string;
  label: string;
  code: string;
  href?: string;
  children?: NavEntry[];
};

const NAV_TREE: NavEntry[] = [
  {
    id: 'agence',
    label: 'Agence',
    code: '01',
    href: '/agency',
  },
  {
    id: 'projets',
    label: 'Projets',
    code: '02',
    children: [
      {
        id: 'maisons',
        label: 'Maisons individuelles',
        code: '02.1',
        children: [
          { id: '0001', label: '0001', code: 'M.01', href: '/projects/0001' },
          { id: '0002', label: '0002', code: 'M.02', href: '/projects/0002' },
        ],
      },
      {
        id: 'tertiaires',
        label: 'Tertiaires',
        code: '02.2',
        children: [
          { id: '0053', label: '0053', code: 'T.01', href: '/projects/0053' },
        ],
      },
      {
        id: 'erp',
        label: 'ERP',
        code: '02.3',
        href: '/projects?category=erp',
      },
    ],
  },
  {
    id: 'contact',
    label: 'Contact',
    code: '03',
    href: '/contact',
  },
];

export default function CompassNav() {
  const [mounted, setMounted] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [navStack, setNavStack] = useState<NavEntry[]>([]);
  const [rotation, setRotation] = useState(0);
  const [needleAngle, setNeedleAngle] = useState(0);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const currentParent = navStack.length > 0 ? navStack[navStack.length - 1] : null;
  const currentItems = currentParent?.children ?? NAV_TREE;

  const handleSelectFolder = (item: NavEntry, angle: number) => {
    setRotation((prev) => prev - 120);
    setNeedleAngle(angle);
    setNavStack((prev) => [...prev, item]);
  };

  const handleBack = () => {
    setRotation((prev) => prev + 120);
    setNeedleAngle(0);
    setNavStack((prev) => prev.slice(0, -1));
  };

  const breadcrumbText =
    navStack.length === 0
      ? 'INDEX 00'
      : navStack.map((item) => item.label.toUpperCase()).join(' / ');

  const compassContent = (
    <nav
      aria-label="Navigation principale"
      style={{
        position: 'fixed',
        top: '24px',
        right: '5.1vw',
        zIndex: 999,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-end',
        width: 'min(28vw, 310px)',
      }}
    >
      <style jsx>{`
        .compass-toggle-btn {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 8px 14px;
          border: 1px solid var(--border, #ccc);
          background: color-mix(in srgb, var(--background, #f5f4f0) 90%, transparent);
          backdrop-filter: blur(6px);
          color: var(--foreground, #111);
          cursor: pointer;
          font-size: 10px;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          transition: background 0.2s ease, color 0.2s ease, border-color 0.2s ease;
          box-shadow: 0 4px 20px rgb(0 0 0 / 10%);
        }
        .compass-toggle-btn:hover {
          background: var(--foreground, #111);
          color: var(--background, #f5f4f0);
          border-color: var(--foreground, #111);
        }
        .toggle-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: currentColor;
        }
        .compass-dropdown-container {
          width: 100%;
          margin-top: 8px;
          padding: 12px;
          border: 1px solid var(--border, #ccc);
          background: color-mix(in srgb, var(--background, #f5f4f0) 92%, transparent);
          backdrop-filter: blur(8px);
          box-shadow: 0 16px 40px rgb(0 0 0 / 15%);
          animation: compassFadeIn 0.2s ease-out forwards;
        }
        @keyframes compassFadeIn {
          from { opacity: 0; transform: translateY(-4px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .navigation-intro {
          display: flex;
          justify-content: space-between;
          gap: 8px;
          margin-bottom: 6px;
          color: var(--muted-foreground, #777);
          font-size: 8px;
          letter-spacing: 0.06em;
          text-transform: uppercase;
        }
        .navigation-intro span:last-child {
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
          max-width: 60%;
          text-align: right;
        }
        .compass-nav {
          position: relative;
          width: 100%;
          aspect-ratio: 1;
          margin: 0 auto;
        }
        .orbit-stage {
          --orbit-radius: clamp(82px, 8.5vw, 110px);
          position: absolute;
          inset: 0;
          border-radius: 50%;
          transition: transform 950ms cubic-bezier(0.18, 0.78, 0.2, 1);
        }
        .orbit-ring {
          position: absolute;
          border: 1px solid var(--border, #ccc);
          border-radius: 50%;
          pointer-events: none;
        }
        .orbit-ring-outer { inset: 5%; }
        .orbit-ring-inner { inset: 18%; border-style: dashed; }
        .orbit-axis {
          position: absolute;
          background: var(--border, #ccc);
          pointer-events: none;
        }
        .orbit-axis-vertical { width: 1px; height: 88%; top: 6%; left: calc(50% - 0.5px); }
        .orbit-axis-horizontal { width: 88%; height: 1px; left: 6%; top: calc(50% - 0.5px); }

        .orbit-stage::before {
          content: '';
          position: absolute;
          inset: 11%;
          border-radius: 50%;
          background: repeating-conic-gradient(from 0deg, var(--border, #ccc) 0deg 0.35deg, transparent 0.35deg 15deg);
          -webkit-mask: radial-gradient(transparent 0 68%, #000 68.5%);
          mask: radial-gradient(transparent 0 68%, #000 68.5%);
          pointer-events: none;
        }
        .orbit-needle {
          position: absolute;
          inset: 27%;
          z-index: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          pointer-events: none;
          transition: transform 950ms cubic-bezier(0.18, 0.78, 0.2, 1);
        }
        .orbit-needle span:first-child {
          position: absolute; top: 0; left: calc(50% - 1px); width: 2px; height: 50%;
          background: var(--foreground, #111);
          clip-path: polygon(50% 0, 100% 100%, 0 100%);
        }
        .orbit-needle span:last-child {
          position: absolute; bottom: 0; left: calc(50% - 1px); width: 2px; height: 50%;
          background: var(--muted-foreground, #777);
          clip-path: polygon(0 0, 100% 0, 50% 100%);
        }
        .orbit-entry {
          position: absolute;
          z-index: 2;
          top: 50%;
          left: 50%;
          width: max-content;
          transition: transform 950ms cubic-bezier(0.18, 0.78, 0.2, 1), opacity 0.2s ease;
        }
        .orbit-label {
          min-height: 32px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 6px;
          padding: 0 10px;
          border: 1px solid var(--border, #ccc);
          background: var(--background, #f5f4f0);
          color: var(--foreground, #111);
          cursor: pointer;
          white-space: nowrap;
          font-size: 10px;
          text-decoration: none;
          transition: background 0.2s ease, color 0.2s ease, border-color 0.2s ease;
        }
        .orbit-label:hover, .orbit-label:focus-visible {
          background: var(--foreground, #111);
          color: var(--background, #f5f4f0);
          border-color: var(--foreground, #111);
          outline: none;
        }
        .orbit-note {
          color: var(--muted-foreground, #777);
          font-size: 8px;
        }
        .compass-center {
          position: absolute;
          top: 50%;
          left: 50%;
          z-index: 3;
          width: 126px;
          min-height: 126px;
          padding: 8px;
          transform: translate(-50%, -50%);
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 4px;
          border: 1px solid var(--border, #ccc);
          border-radius: 50%;
          background: var(--background, #f5f4f0);
          box-shadow: 0 0 0 6px var(--background, #f5f4f0), 0 0 0 7px var(--border, #ccc);
          text-align: center;
        }
        .center-mark {
          display: grid;
          place-items: center;
          width: 24px;
          height: 24px;
          border: 1px solid var(--border, #ccc);
          border-radius: 50%;
        }
        .center-title {
          max-width: 100px;
          font-size: 10px;
          line-height: 1.2;
          font-weight: 500;
          color: var(--foreground, #111);
          text-decoration: none;
        }
        .center-title:hover {
          text-decoration: underline;
        }
        .center-caption {
          color: var(--muted-foreground, #777);
          font-size: 7px;
          letter-spacing: 0.08em;
          text-transform: uppercase;
        }
        .return-button {
          display: inline-flex;
          align-items: center;
          gap: 3px;
          padding: 1px 0 0;
          border: 0;
          background: none;
          cursor: pointer;
          color: var(--muted-foreground, #777);
          font-size: 8px;
          text-transform: uppercase;
        }
        .return-button:hover {
          color: var(--foreground, #111);
        }
        @media (max-width: 760px) {
          nav { top: 16px !important; right: 4vw !important; width: min(86vw, 300px) !important; }
        }
      `}</style>

      <button
        type="button"
        className="compass-toggle-btn"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
      >
        <span className="toggle-dot" />
        <span>{isOpen ? 'Fermer' : 'Index // Nav'}</span>
      </button>

      {isOpen && (
        <div className="compass-dropdown-container">
          <div className="navigation-intro">
            <span>NAV // 43°59&apos;N 4°35&apos;E</span>
            <span>{breadcrumbText}</span>
          </div>

          <div className="compass-nav">
            <div className="orbit-ring orbit-ring-outer" />
            <div className="orbit-ring orbit-ring-inner" />
            <div className="orbit-axis orbit-axis-vertical" />
            <div className="orbit-axis orbit-axis-horizontal" />

            <div
              className="orbit-needle"
              style={{ transform: `rotate(${needleAngle}deg)` }}
            >
              <span />
              <span />
            </div>

            <div
              className="orbit-stage"
              style={{ transform: `rotate(${rotation}deg)` }}
            >
              {currentItems.map((item, index) => {
                const baseAngle = -90 + (index * 360) / currentItems.length;
                const totalAngle = baseAngle + rotation;
                const entryTransform = `translate(-50%, -50%) rotate(${baseAngle}deg) translate(var(--orbit-radius)) rotate(${-totalAngle}deg)`;

                return (
                  <div
                    key={item.id}
                    className="orbit-entry"
                    style={{ transform: entryTransform }}
                    onMouseEnter={() => setNeedleAngle(baseAngle + 90)}
                  >
                    {item.children ? (
                      <button
                        type="button"
                        className="orbit-label"
                        onClick={() => handleSelectFolder(item, baseAngle + 90)}
                      >
                        <span className="orbit-note">{item.code}</span>
                        <span>{item.label}</span>
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="10" height="10">
                          <path d="M9 18l6-6-6-6" />
                        </svg>
                      </button>
                    ) : (
                      <Link
                        href={item.href || '/'}
                        className="orbit-label"
                        onClick={() => {
                          setIsOpen(false);
                          setNavStack([]);
                          setRotation(0);
                        }}
                      >
                        <span className="orbit-note">{item.code}</span>
                        <span>{item.label}</span>
                      </Link>
                    )}
                  </div>
                );
              })}
            </div>

            <div className="compass-center">
              <div className="center-mark">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" width="15" height="15">
                  <circle cx="12" cy="12" r="2" />
                  <path d="M12 2v4M12 18v4M2 12h4M18 12h4" />
                </svg>
              </div>

              <Link
                href="/"
                className="center-title"
                onClick={() => {
                  setIsOpen(false);
                  setNavStack([]);
                  setRotation(0);
                }}
              >
                {currentParent ? currentParent.label : 'Stef Ammerlaan'}
              </Link>

              {currentParent ? (
                <button type="button" className="return-button" onClick={handleBack}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" width="10" height="10">
                    <path d="M15 18l-6-6 6-6" />
                  </svg>
                  <span>Retour</span>
                </button>
              ) : (
                <span className="center-caption">Architecture</span>
              )}
            </div>
          </div>
        </div>
      )}
    </nav>
  );

  return createPortal(compassContent, document.body);
}