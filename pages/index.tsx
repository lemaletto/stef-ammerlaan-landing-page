import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import { useEffect } from 'react';
import { useApp } from '../context/AppContext';
import Loading from '../components/Loading';
import NavbarLayout from '../components/NavbarLayout';
import AnimatedSection from '../components/AnimatedSection';
import Link from 'next/link';
import AnimatedLogo from '../components/AnimatedLogo';

const Home: NextPage = () => {
  const { loading, setLoading } = useApp();

  useEffect(() => {
    setLoading(true);
  }, [setLoading]);

  if (loading) return <Loading />;

  return (
    <div>
      <Head>
        <title>Stef Ammerlaan Architecture</title>
        <meta httpEquiv="content-language" content="fr-fr" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#fff" />
        <meta
          name="keywords"
          content="architecture, stef, ammerlaan, architecte, nîmes, gard, avignon, montpellier, construction, maison, bâtiment, permis de construire, chantier, projet, image, art, balcon, Nîmes"
        />
        <meta
          name="description"
          content="Architecte franco-néerlandais basé dans le Gard, Stef Ammerlaan vous propose des solutions d'Architectures novatrices"
        />
        <meta property="og:title" content="Stef Ammerlaan - Architecture" />
        <meta
          property="og:url"
          content="https://ammerlaanstefarchitecture.com"
        />
        <meta
          property="og:description"
          content="Architecte franco-néerlandais basé dans le Gard, Stef Ammerlaan vous propose des solutions d'Architectures novatrices"
        />
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
      </Head>

      <NavbarLayout>
        <AnimatedSection className="w-11/12 mx-auto h-[calc(100vh-61px)] flex items-center justify-center md:w-full">
          <div className="flex flex-col items-center justify-center h-full">
            <div className="flex-[2] flex items-center justify-center flex-col w-full">
              <AnimatedLogo animated={false} />
              <h1 className="font-bold text-lg">AMMERLAAN STEF ARCHITECTURE</h1>
            </div>
            <div className="mb-12 text-center md:mb-6">
              <Link
                className="text-mid-gray text-sm underline cursor-pointer block"
                href="mailto:agence@ammerlaanstefarchitecture.com"
              >
                agence@ammerlaanstefarchitecture.com
              </Link>
              <p className="text-mid-gray text-sm underline cursor-pointer">
                06.86.30.23.78
              </p>
            </div>
          </div>
        </AnimatedSection>
      </NavbarLayout>
    </div>
  );
};

export default Home;
