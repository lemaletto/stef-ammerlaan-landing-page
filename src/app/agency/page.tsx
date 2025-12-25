import { ownerImg } from '@/mock/data';
import AnimatedSection from '@/components/AnimatedSection';
import Image from 'next/image';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Agence',
  description: 'Architecte franco-néerlandais basé dans le Gard.',
  keywords:
    'architecture, agence, stef, ammerlaan, architecte, nîmes, gard, avignon, montpellier, construction, maison, bâtiment, permis de construire, chantier, projet, image, art, balcon, Nîmes',
  openGraph: {
    title: 'Stef Ammerlaan - Architecture',
    description: 'Architecte franco-néerlandais basé dans le Gard.',
    url: 'https://ammerlaanstefarchitecture.com',
  },
};

export default function Agency() {
  return (
    <div className="min-h-screen bg-white">
      <AnimatedSection className="max-w-7xl mx-auto px-6 md:px-12 py-24">
        {/* Header */}
        <div className="mb-20">
          <h1 className="text-4xl md:text-6xl font-light text-gray-900 mb-6 tracking-tight">
            L'Agence
          </h1>
          <div className="w-20 h-px bg-gray-300 mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl">
            Architecte franco-néerlandais, Stef Ammerlaan développe une
            architecture conceptuelle, contemporaine et respectueuse du terroir
            méditerranéen.
          </p>
        </div>

        {/* Profile Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16 mb-24">
          {/* Image */}
          <div className="lg:col-span-1">
            <div className="relative aspect-square max-w-md mx-auto lg:mx-0 bg-gray-100 overflow-hidden">
              <Image
                layout="fill"
                objectFit="cover"
                src={ownerImg}
                alt="Stef Ammerlaan, architecte"
                className="grayscale hover:grayscale-0 transition-all duration-500"
              />
            </div>
            <div className="mt-6 text-center lg:text-left">
              <p className="text-lg font-light text-gray-900">Stef Ammerlaan</p>
              <p className="text-sm text-gray-500 mt-1">Architecte HMONP</p>
              <p className="text-sm text-gray-500">Fondateur</p>
            </div>
          </div>

          {/* Bio - French */}
          <div className="lg:col-span-2 space-y-6 text-gray-700 leading-relaxed">
            <p className="text-lg">
              De nationalité néerlandaise, Stef Ammerlaan est né et a grandi
              dans le sud de la France. Imprégné de ces deux cultures
              européennes, il a su développer un attrait et un double regard sur
              une langue universelle : l'architecture.
            </p>
            <p>
              Titulaire d'un MASTER de l'École Nationale Supérieure
              d'Architecture de Montpellier en 2017, c'est en Alsace que Stef
              Ammerlaan fait ses premières armes dans la Maitrise d'Oeuvre.
              Terre connue pour son avance dans les savoir-faire constructifs
              (bâtiments passifs / constructions bois), il se forge une base
              solide.
            </p>
            <p>
              Il finalise sa mise en situation dans un cabinet d'architecte de
              Nîmes dans lequel il se forme au chantier, aux marchés publics,
              ainsi qu'au BIM. Les connaissances acquises et les expériences
              vécues permettent à Stef Ammerlaan de soutenir son Habilitation à
              la Maitrise d'Oeuvre en son Nom Propre (H.M.O.N.P.) en 2021 et de
              s'inscrire à l'ordre des architectes.
            </p>
            <p className="font-medium text-gray-900">
              Ammerlaan Stef Architecture est créée le 24/01/2022.
            </p>
            <p>
              L'architecture mise en place se veut conceptuelle, contemporaine
              et respectueuse du terroir. Implanté à Nîmes, Ammerlaan Stef
              Architecture connaît les enjeux et les contraintes du milieu
              méditerranéen d'aujourd'hui sur les constructions et les
              habitants.
            </p>
            <p>
              Le défi relevé est de bâtir pour demain à l'aube de l'accélération
              du dérèglement climatique. Que ce soit dans le neuf et
              particulièrement dans la rénovation, une attention particulière
              est apportée sur la gestion de la ressource. Qu'il s'agisse des
              matériaux ou bien des éléments "déjà là", ceux-ci seront mis au
              centre de la conception. La notion de fonctionnalité paraîtra
              logique et intuitive. L'articulation des espaces ne laissera aucun
              obstacle afin de permettre des traversées, des ambiances
              confortables.
            </p>
          </div>
        </div>

        {/* English Version */}
        <div className="border-t border-gray-200 pt-16 mb-24">
          <h2 className="text-2xl md:text-3xl font-light text-gray-900 mb-12 tracking-tight">
            About the Agency
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 text-gray-600 leading-relaxed">
            <div className="space-y-4">
              <p>
                As a Dutch born and raised in south of France, Stef Ammerlaan
                became imbued with those two cultures. He developed an interest
                in architecture, which is a universal language.
              </p>
              <p>
                After being graduated from Montpellier's Architecture School
                (ENSAM) in 2017, Stef Ammerlaan made his firsts steps into
                professional architecture in Alsace nearby Germany and
                Switzerland. This French region is known for it's advanced
                building engineering (passive houses / wood constructions). His
                skills in architecture rise to solid knowledge.
              </p>
              <p>
                Back to the South of France, he finished his professionalizing
                cursus in an architecture office located in Nîmes, in which he
                led constructions sites, competed for public offers and was
                initiated to BIM. These experiences allowed Stef Ammerlaan to
                complete his ability to practice architecture in his own name
                (H.M.O.N.P.) in 2021 and to join the French architect's order.
              </p>
            </div>
            <div className="space-y-4">
              <p className="font-medium text-gray-900">
                Ammerlaan Stef Architecture is created the 24/01/2022.
              </p>
              <p>
                The architectural style proposed is and always will be
                conceptual, contemporary and respectful of what may already
                exist. Located in Nîmes, Ammerlaan Stef Architecture knows the
                Mediterranean climate with its hazards and risks on buildings
                and people.
              </p>
              <p>
                The challenge is to think the future while our world is
                changing. Whether the project is new or old, a specific
                attention will be applied on the resource.
              </p>
              <p>
                Materials and element's already in place will be in the center
                of the conception.
              </p>
              <p>
                The application of functionality will bring logical and
                intuitive floor plans, the connections between spaces will be
                smooth and straight.
              </p>
            </div>
          </div>
        </div>

        {/* Values/Philosophy */}
        <div className="bg-gray-50 -mx-6 md:-mx-12 px-6 md:px-12 py-16">
          <h2 className="text-2xl md:text-3xl font-light text-gray-900 mb-12 text-center tracking-tight">
            Mon approche
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 max-w-6xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-6 bg-gray-900 flex items-center justify-center">
                <svg
                  className="w-8 h-8 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-medium text-gray-900 mb-3">
                Conceptuel
              </h3>
              <p className="text-sm text-gray-600">
                Une réflexion approfondie sur chaque projet, adaptée aux besoins
                spécifiques et au contexte
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-6 bg-gray-900 flex items-center justify-center">
                <svg
                  className="w-8 h-8 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M4 5a1 1 0 011-1h4a1 1 0 011 1v7a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM14 5a1 1 0 011-1h4a1 1 0 011 1v7a1 1 0 01-1 1h-4a1 1 0 01-1-1V5z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M4 16a1 1 0 011-1h4a1 1 0 011 1v3a1 1 0 01-1 1H5a1 1 0 01-1-1v-3zM14 16a1 1 0 011-1h4a1 1 0 011 1v3a1 1 0 01-1 1h-4a1 1 0 01-1-1v-3z"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-medium text-gray-900 mb-3">
                Contemporain
              </h3>
              <p className="text-sm text-gray-600">
                Des solutions architecturales modernes alliant esthétique et
                performance technique
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-6 bg-gray-900 flex items-center justify-center">
                <svg
                  className="w-8 h-8 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-medium text-gray-900 mb-3">
                Respectueux
              </h3>
              <p className="text-sm text-gray-600">
                Une attention particulière portée au terroir méditerranéen et
                aux enjeux environnementaux
              </p>
            </div>
          </div>
        </div>
      </AnimatedSection>
    </div>
  );
}
