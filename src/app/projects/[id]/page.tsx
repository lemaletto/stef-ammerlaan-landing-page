import { projects } from '@/mock/data';
import Slider from '@/components/Slider';
import Footer from '@/components/Footer';
import AnimatedSection from '@/components/AnimatedSection';
import { Metadata } from 'next';
import Link from 'next/link';

type Props = {
  params: Promise<{ id: string }>;
};

// Generate static params for all projects
export async function generateStaticParams() {
  return projects.map((project) => ({
    id: project.id,
  }));
}

// Generate metadata for each project page
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const project = projects.find((item) => item.id === id);

  if (!project) {
    return {
      title: 'Project Not Found',
    };
  }

  return {
    title: `${project.title} - Stef Ammerlaan Architecture`,
    description:
      "Chaque maison développée chez Ammerlaan Stef Architecture démarre par la prise en compte d'un programme établi du Maitre d'Ouvrage (client). L'architecture proposée répond aux attentes escomptées ainsi que les contraintes du site.",
    keywords:
      'site, architecture, stef, ammerlaan, architecte, nîmes, gard, avignon, montpellier, construction, maison, bâtiment, permis de construire, chantier, projet, image, art, balcon, Nîmes',
    openGraph: {
      title: `${project.title} - Stef Ammerlaan Architecture`,
      description:
        "Chaque maison développée chez Ammerlaan Stef Architecture démarre par la prise en compte d'un programme établi du Maitre d'Ouvrage (client). L'architecture proposée répond aux attentes escomptées ainsi que les contraintes du site.",
    },
  };
}

// Async Server Component - the new way in Next.js
export default async function SingleProject({ params }: Props) {
  const { id } = await params;
  const project = projects.find((item) => item.id === id);

  if (!project) {
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
            {project.title}
          </h1>
          <div className="w-20 h-px bg-gray-300 mb-10"></div>

          {/* Descriptions */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {project.description?.map((item) => (
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
            <Slider images={project.images} />
          </div>
        </div>

        {/* Project Info Grid */}
        <div className="border-t border-gray-200 pt-16 mb-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-sm uppercase tracking-wider text-gray-400 mb-3">
                Type
              </h3>
              <p className="text-gray-900">{project.title}</p>
            </div>
            <div>
              <h3 className="text-sm uppercase tracking-wider text-gray-400 mb-3">
                Statut
              </h3>
              <p className="text-gray-900">En cours</p>
            </div>
            <div>
              <h3 className="text-sm uppercase tracking-wider text-gray-400 mb-3">
                Localisation
              </h3>
              <p className="text-gray-900">Gard, France</p>
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

      <Footer />
    </div>
  );
}
