/* eslint-disable react/no-unescaped-entities */
import Footer from '../../components/Footer';
import { ownerImg } from '../../mock/data';
import AnimatedSection from '../../components/AnimatedSection';
import Image from 'next/image';
import Head from 'next/head';

export default function Agency() {
  return (
    <AnimatedSection className="w-11/12 mx-auto min-h-screen flex relative md:w-full">
      <Head>
        <title>Agence - Stef Ammerlaan</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#fff" />
        <meta
          name="keywords"
          content="architecture, agence, stef, ammerlaan, architecte, nîmes, gard, avignon, montpellier, construction, maison, bâtiment, permis de construire, chantier, projet, image, art, balcon, Nîmes"
        />
        <meta
          name="description"
          content="Architecte franco-néerlandais basé dans le Gard."
        />
        <meta property="og:title" content="Stef Ammerlaan - Architecture" />
        <meta
          property="og:url"
          content="https://ammerlaanstefarchitecture.com"
        />
        <meta
          property="og:description"
          content="Architecte franco-néerlandais basé dans le Gard."
        />
      </Head>
      <div className="h-95% my-auto flex flex-col md:my-auto">
        <div className="flex items-center justify-center m-10">
          <div className="relative w-40 h-40">
            <Image
              layout="fill"
              className=""
              src={ownerImg}
              alt="owner of the website, the architect stef ammerlaan"
            />
          </div>
        </div>
        <div className="flex items-start md:flex-col md:items-center md:gap-4 md:mb-40 max-md:mb-40">
          <div className="w-35% mx-auto leading-snug text-sm md:w-11/12 md:text-justify">
            <p className="mb-5">
              De nationalité néerlandaise, Stef Ammerlaan est né et a grandi
              dans le sud de la France. Imprégné de ces deux cultures
              européennes, il a su développer un attrait et un double regard sur
              une langue universelle : l&apos;architecture.
            </p>
            <p className="mb-5">
              Titulaire d&apos;un MASTER de l&apos;École Nationale Supérieure
              d&apos;Architecture de Montpellier en 2017, c&apos;est en Alsace
              que Stef Ammerlaan fait ses premières armes dans la Maitrise
              d&apos;Oeuvre. Terre connue pour son avance dans les savoir-faire
              constructifs (bâtiments passifs / constructions bois), il se forge
              une base solide.
            </p>
            <p className="mb-5">
              Il finalise sa mise en situation dans un cabinet d&apos;architecte
              de Nîmes dans lequel il se forme au chantier, aux marchés publics,
              ainsi qu&apos;au BIM. Les connaissances acquises et les
              expériences vécues permettent à Stef Ammerlaan de soutenir son
              Habilitation à la Maitrise d&apos;Oeuvre en son Nom Propre
              (H.M.O.N.P.) en 2021 et de s&apos;inscrire à l&apos;ordre des
              architectes.
            </p>
            <p className="mb-5">
              Ammerlaan Stef Architecture est créée le 24/01/2022,
            </p>
            <p className="mb-5">
              L&apos;architecture mise en place se veut conceptuelle,
              contemporaine et respectueuse du terroir. Implanté à Nîmes,
              Ammerlaan Stef Architecture connaît les enjeux et les contraintes
              du milieu méditerranéen d&apos;aujourd&apos;hui sur les
              constructions et les habitants.
            </p>
            <p>
              Le défi relevé est de bâtir pour demain à l&apos;aube de
              l&apos;accélération du dérèglement climatique. Que ce soit dans le
              neuf et particulièrement dans la rénovation, une attention
              particulière est apportée sur la gestion de la ressource. Qu'il
              s'agisse des matériaux ou bien des éléments &quot;déjà là&quot;,
              ceux-ci seront mis au centre de la conception. La notion de
              fonctionnalité paraîtra logique et intuitive. L'articulation des
              espaces ne laissera aucun obstacle afin de permettre des
              traversées, des ambiances confortables.
            </p>
          </div>
          <div className="w-35% mx-auto leading-snug text-sm font-medium text-gray-500 md:w-11/12">
            <p className="mb-5">
              As a Dutch born and raised in south of France,
            </p>
            <p className="mb-5">
              Stef Ammerlaan became imbued with those two cultures.
            </p>
            <p className="mb-5">
              He developed an interest in architecture, which is a universal
              language.
            </p>
            <p className="mb-5">
              After being graduated from Montpellier's Architecture School
              (ENSAM) in 2017, Stef Ammerlaan made his firsts steps into
              professional architecture in Alsace nearby Germany and
              Switzerland. This French region is known for it's advanced
              building engineering (passive houses / wood constructions). His
              skills in architecture rise to solid knowledge.
            </p>
            <p className="mb-5">
              Back to the South of France, he finished his professionalizing
              cursus in an architecture office located in Nîmes, in which he led
              constructions sites, competed for public offers and was initiated
              to BIM. These experiences allowed Stef Ammerlaan to complete his
              ability to practice architecture in his own name (H.M.O.N.P.) in
              2021 and to join the French architect's order.
            </p>
            <p className="mb-5">
              Ammerlaan Stef Architecture is created the 24/01/2022,
              (dd/mm/yyyy)
            </p>
            <p className="mb-5">
              The architectural style proposed is and always will be conceptual,
              contemporary and respectful of what may already exist. Located in
              Nîmes, Ammerlaan Stef Architecture knows the Mediterranean climate
              with its hazards and risks on buildings and people.
            </p>
            <p className="mb-5">
              The challenge is to think the future while our world is changing.
              Whether the project is new or old, a specific attention will be
              applied on the resource.
            </p>
            <p className="mb-5">
              Materials and element&apos;s already in place will be in the
              center of the conception.
            </p>
            <p>
              The application of functionality will bring logical and intuitive
              floor plans, the connections between spaces will be smooth and
              straight.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </AnimatedSection>
  );
}
