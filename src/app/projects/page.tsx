import Link from 'next/link';
import Image from 'next/image';
import AnimatedSection from '@/components/AnimatedSection';
import Footer from '@/components/Footer';
import { projects } from '@/mock/data';
import { houses } from '@/mock/data';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Projets',
  description:
    'Découvrez les projets architecturaux de Stef Ammerlaan - Maisons contemporaines dans le Gard',
  keywords:
    'projets, architecture, stef, ammerlaan, architecte, nîmes, gard, maisons, constructions',
  openGraph: {
    title: 'Projets - Stef Ammerlaan Architecture',
    description: 'Découvrez les projets architecturaux de Stef Ammerlaan',
  },
};

export default function ProjectsList() {
  return (
    <div className="min-h-screen bg-white">
      <AnimatedSection className="max-w-7xl mx-auto px-6 md:px-12 py-24">
        {/* Header */}
        <div className="mb-20">
          <h1 className="text-4xl md:text-6xl font-light text-gray-900 mb-6 tracking-tight">
            Nos projets
          </h1>
          <div className="w-20 h-px bg-gray-300 mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl">
            Découvrez une sélection de nos réalisations architecturales, chacune
            pensée pour son contexte unique et les besoins de ses habitants.
          </p>
        </div>

        {/* Houses Grid */}
        <div className="mb-24">
          <h2 className="text-2xl md:text-3xl font-light text-gray-900 mb-12 tracking-tight">
            Maisons individuelles
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
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
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300"></div>
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-light text-gray-900 group-hover:text-gray-600 transition-colors">
                    Maison {house.id}
                  </h3>
                  <div className="flex items-center gap-4 text-sm text-gray-500">
                    <span>
                      {house.status === 'underConstruction'
                        ? 'En construction'
                        : house.status === 'inProgress'
                        ? 'En cours'
                        : 'Livré'}
                    </span>
                    {house.date && (
                      <>
                        <span>•</span>
                        <span>{new Date(house.date).getFullYear()}</span>
                      </>
                    )}
                  </div>
                  <p className="text-sm text-gray-600 line-clamp-2">
                    {house.description[0]?.content.slice(0, 120)}...
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Projects Section */}
        <div className="border-t border-gray-200 pt-16">
          <h2 className="text-2xl md:text-3xl font-light text-gray-900 mb-12 tracking-tight">
            Autres projets
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {projects.map((project) => (
              <Link
                key={project.id}
                href={`/projects/${project.id}`}
                className="group cursor-pointer"
              >
                <div className="relative aspect-video mb-6 overflow-hidden bg-gray-100">
                  {project.images[0] && (
                    <Image
                      src={project.images[0]}
                      alt={project.title}
                      fill
                      style={{ objectFit: 'cover' }}
                      className="group-hover:scale-105 transition-transform duration-700"
                    />
                  )}
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300"></div>
                </div>
                <div className="space-y-3">
                  <h3 className="text-2xl font-light text-gray-900 group-hover:text-gray-600 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm text-gray-600 line-clamp-3">
                    {project.description[0]?.content.slice(0, 180)}...
                  </p>
                  <div className="flex items-center gap-2 text-sm text-gray-900 group-hover:gap-4 transition-all">
                    <span>En savoir plus</span>
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-24 bg-gray-50 -mx-6 md:-mx-12 px-6 md:px-12 py-16 text-center">
          <h2 className="text-2xl md:text-3xl font-light text-gray-900 mb-6">
            Un projet en tête ?
          </h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Discutons de votre projet architectural et des solutions que nous
            pouvons apporter ensemble.
          </p>
          <Link
            href="/agency"
            className="inline-block px-8 py-3 bg-gray-900 text-white hover:bg-gray-800 transition-all duration-300 text-sm tracking-wider"
          >
            CONTACTEZ-NOUS
          </Link>
        </div>
      </AnimatedSection>

      <Footer />
    </div>
  );
}
