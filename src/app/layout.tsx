import '../globals.css';
import { AnimatePresence } from 'framer-motion';
import { AppProvider } from '@/context/AppContext';
import NavbarLayout from '@/components/NavbarLayout';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: {
    default: 'Stef Ammerlaan Architecture',
    template: '%s | Stef Ammerlaan Architecture',
  },
  description:
    "Architecte franco-néerlandais basé dans le Gard, Stef Ammerlaan vous propose des solutions d'Architectures novatrices",
  keywords:
    'architecture, stef, ammerlaan, architecte, nîmes, gard, avignon, montpellier, construction, maison, bâtiment, permis de construire, chantier, projet, image, art, balcon, Nîmes',
  openGraph: {
    title: 'Stef Ammerlaan - Architecture',
    description:
      "Architecte franco-néerlandais basé dans le Gard, Stef Ammerlaan vous propose des solutions d'Architectures novatrices",
    url: 'https://ammerlaanstefarchitecture.com',
    siteName: 'Stef Ammerlaan Architecture',
    locale: 'fr_FR',
    type: 'website',
  },
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body>
        <AnimatePresence mode="wait">
          <AppProvider>
            <NavbarLayout>{children}</NavbarLayout>
          </AppProvider>
        </AnimatePresence>
      </body>
    </html>
  );
}
