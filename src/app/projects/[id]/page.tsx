import { houses } from '@/mock/data';
import Slider from '@/components/Slider';
import AnimatedSection from '@/components/AnimatedSection';
import { Metadata } from 'next';
import Link from 'next/link';

type Props = {
  params: Promise<{ id: string }>;
};

// Generate static params for all houses
export async function generateStaticParams() {
  return houses.map((house) => ({
    id: house.id,
  }));
}

// Generate metadata for each house page
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const house = houses.find((item) => item.id === id);

  if (!house) {
    return {
      title: 'Project Not Found',
    };
  }

  return {
    title: `Maison ${house.id} - Stef Ammerlaan Architecture`,
    description:
      house.description.find((d) => d.lan === 'fr')?.content ||
      "Chaque maison développée chez Ammerlaan Stef Architecture démarre par la prise en compte d'un programme établi du Maitre d'Ouvrage (client).",
    keywords:
      'site, architecture, stef, ammerlaan, architecte, nîmes, gard, avignon, montpellier, construction, maison, bâtiment, permis de construire, chantier, projet, image, art, balcon, Nîmes',
    openGraph: {
      title: `Maison ${house.id} - Stef Ammerlaan Architecture`,
      description:
        house.description.find((d) => d.lan === 'fr')?.content ||
        "Chaque maison développée chez Ammerlaan Stef Architecture démarre par la prise en compte d'un programme établi du Maitre d'Ouvrage (client).",
    },
  };
}

// Async Server Component - the new way in Next.js
export default async function SingleProject({ params }: Props) {
  const { id } = await params;
  const house = houses.find((item) => item.id === id);

  if (!house) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-light text-gray-900 mb-4">
            Project Not Found
          </h1>
          <Link
            href="/projects"
            className="text-sm text-gray-500 hover:text-gray-900 transition-colors"
          >
            ← Return to Projects
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <AnimatedSection className="max-w-7xl mx-auto px-6 md:px-12 py-24">
        {/* Breadcrumb */}
        <div className="mb-12">
          <Link
            href="/projects"
            className="text-sm text-gray-500 hover:text-gray-900 transition-colors"
          >
            ← Retour aux projets
          </Link>
        </div>

        {/* Project Header */}
        <div className="mb-16">
          <h1 className="text-4xl md:text-6xl font-light text-gray-900 mb-8 tracking-tight">
            Maison {house.id}
          </h1>
          <div className="w-20 h-px bg-gray-300 mb-10"></div>

          {/* Descriptions */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {house.description?.map((item) => (
              <div key={item.lan} className="space-y-4">
                <p className="text-xs uppercase tracking-wider text-gray-400 mb-4">
                  {item.lan === 'fr' ? 'Français' : 'English'}
                </p>
                <p className="text-base md:text-lg text-gray-700 leading-relaxed whitespace-pre-line">
                  {item.content}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Project Images - Large Slider */}
        <div className="mb-24">
          <div className="relative">
            <Slider
              images={
                house.concepts && house.concepts.length > 0
                  ? house.concepts
                  : [house.picture]
              }
            />
          </div>
        </div>

        {/* Project Info Grid */}
        <div className="border-t border-gray-200 pt-16 mb-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-sm uppercase tracking-wider text-gray-400 mb-3">
                Date
              </h3>
              <p className="text-gray-900">
                {new Date(house.date).getFullYear()}
              </p>
            </div>
            <div>
              <h3 className="text-sm uppercase tracking-wider text-gray-400 mb-3">
                Statut
              </h3>
              <p className="text-gray-900">
                {house.status === 'underConstruction'
                  ? 'En construction'
                  : house.status === 'inProgress'
                  ? 'En cours'
                  : 'Terminé'}
              </p>
            </div>
            <div>
              <h3 className="text-sm uppercase tracking-wider text-gray-400 mb-3">
                Mission
              </h3>
              <p className="text-gray-900">
                {house.missionCompleted ? 'Mission complète' : 'En cours'}
              </p>
            </div>
          </div>
        </div>

        {/* Navigation to other projects */}
        <div className="border-t border-gray-200 pt-16">
          <h2 className="text-2xl md:text-3xl font-light text-gray-900 mb-8">
            Autres projets
          </h2>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/projects"
              className="px-8 py-3 border border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white transition-all duration-300 text-sm tracking-wider text-center"
            >
              VOIR TOUS LES PROJETS
            </Link>
            <Link
              href="/agency"
              className="px-8 py-3 bg-gray-900 text-white hover:bg-gray-800 transition-all duration-300 text-sm tracking-wider text-center"
            >
              CONTACTEZ-NOUS
            </Link>
          </div>
        </div>
      </AnimatedSection>
    </div>
  );
}
