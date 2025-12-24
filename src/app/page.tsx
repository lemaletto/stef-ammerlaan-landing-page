'use client';

import Image from 'next/image';
import { useEffect } from 'react';
import { useApp } from '@/context/AppContext';
import AnimatedSection from '@/components/AnimatedSection';
import Link from 'next/link';
import { houses } from '@/mock/data';

export default function Home() {
  const { setLoading } = useApp();

  // useEffect(() => {
  //   setLoading(true);
  // }, []);

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <AnimatedSection className="relative h-screen flex items-center justify-center bg-linear-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12 text-center">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-light tracking-tight text-gray-900 mb-6">
            STEF AMMERLAAN
          </h1>
          <p className="text-xl md:text-2xl font-light text-gray-600 mb-4 tracking-wide">
            ARCHITECTURE
          </p>
          <div className="w-20 h-px bg-gray-300 mx-auto mb-12"></div>
          <p className="text-base md:text-lg text-gray-500 max-w-2xl mx-auto mb-12 leading-relaxed">
            Architecte franco-néerlandais basé dans le Gard
            <br />
            Solutions architecturales novatrices et respectueuses
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="/agency"
              className="px-8 py-3 border border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white transition-all duration-300 text-sm tracking-wider"
            >
              DÉCOUVRIR L&apos;AGENCE
            </Link>
            <Link
              href="/projects"
              className="px-8 py-3 bg-gray-900 text-white hover:bg-gray-800 transition-all duration-300 text-sm tracking-wider"
            >
              VOIR LES PROJETS
            </Link>
          </div>
        </div>
      </AnimatedSection>

      {/* Featured Projects Section */}
      <AnimatedSection className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-16 tracking-tight">
            Projets récents
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {houses.map((house) => (
              <Link
                key={house.id}
                href={`/projects/${house.id}`}
                className="group cursor-pointer"
              >
                <div className="relative aspect-4/3 mb-6 overflow-hidden bg-gray-100">
                  <Image
                    src={house.picture}
                    alt={house.alt || `Maison ${house.id}`}
                    fill
                    style={{ objectFit: 'cover' }}
                    className="group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-light text-gray-900 group-hover:text-gray-600 transition-colors">
                    Maison {house.id}
                  </h3>
                  <p className="text-sm text-gray-500">
                    {house.status === 'underConstruction'
                      ? 'En construction'
                      : 'En cours'}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Philosophy Section */}
      <AnimatedSection className="py-24 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 md:px-12 text-center">
          <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-8 tracking-tight">
            Notre philosophie
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed mb-6">
            Une architecture conceptuelle, contemporaine et respectueuse du
            terroir méditerranéen.
          </p>
          <p className="text-base text-gray-500 leading-relaxed">
            Ammerlaan Stef Architecture apporte une attention particulière à la
            gestion des ressources, à la fonctionnalité des espaces et au
            confort des habitants face aux défis climatiques.
          </p>
        </div>
      </AnimatedSection>

      {/* Contact Section */}
      <AnimatedSection className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12 text-center">
          <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-12 tracking-tight">
            Contactez-moi
          </h2>
          <div className="flex flex-col sm:flex-row gap-8 justify-center items-center text-gray-600">
            <Link
              href="mailto:agence@ammerlaanstefarchitecture.com"
              className="group flex items-center gap-2 hover:text-gray-900 transition-colors"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              <span className="text-sm">
                agence@ammerlaanstefarchitecture.com
              </span>
            </Link>
            <div className="flex items-center gap-2">
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
              <span className="text-sm">06.86.30.23.78</span>
            </div>
          </div>
        </div>
      </AnimatedSection>
    </div>
  );
}
