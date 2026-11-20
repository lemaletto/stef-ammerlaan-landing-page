import { HouseModel, LinkType } from '@/types/index';
import { ProjectModel } from '@/types/index';

export const navbarLinks: LinkType[] = [
  {
    name: 'Agence',
    link: '/agency',
    isLink: true,
  },
  
  {
    name: 'Projets',
    link: '/projects',
    isLink: false,
   items: [
      {
        name: 'Maisons individuelles',
        isLink: false,
        items: [
          {
            name: 'Maison 0001',
            link: '/projects/0001',
          },
          {
            name: 'Maison 0002',
            link: '/projects/0002',
          },
          {
            name: 'Maison 0012',
            link: '/projects/0012',
          },
          {
            name: 'Maison 0013',
            link: '/projects/0013',
          },
        ],
      },
      {
        name: 'Tertiaires',
        isLink: false,
        items: [
          {
            name : 'Bureau 0053',
            link: '/projects/0053'
          }
        ]
      },


      {
        name: 'ERP',
        isLink: false,
        items: [
          {
            name :'ERP 0017',
            link: '/projects/0017'
          },
          {
            name :'ERP 0026',
            link: '/projects/0026'
          },
          {
            name :'ERP 0040',
            link: '/projects/0040'
          }
        ]
      },
    ],
  },
  {
    name: 'Contact',
    link: '/contact',
    isLink: true,
  },
];

export const projects: ProjectModel[] = [
  {
    id: 'houseXproject',
    title: 'Maisons/Houses',
    description: [
      {
        lan: 'fr',
        content: `Chaque maison développée  chez Ammerlaan Stef Architecture démarre par la prise en compte d’un programme établi du Maitre d’Ouvrage (client).
        L’architecture proposée répond aux attentes escomptées ainsi que les contraintes du site.
        Plusieurs réunions, dans lesquelles l’architecte oriente le maitre d’ouvrage, séquencent l’avancement afin d’améliorer le projet à chaque étape.
        Finalement la maison évolue de manière buissonnante, jusqu’à ce que le projet dépasse les attentes.`,
      },
      {
        lan: 'en',
        content: `Each house development at Ammerlaan Stef Architecture starts by delivering a listed program of your requests. 
        The propositions will include the client’s demands and will suit local rules in addition to the architect’s touch. 
        Some work meetings will punctuate the progress of the project, in which improving the building will be discussed. 
        Finally, the house conception evolves like Darwin’s theory until it’s beyond expectations.`,
      },
    ],
    images: [
      `/assets/images/Single-House-1.png`,
      `/assets/images/Single-House-2.png`,
    ],
  },
];

export const SingleHouseOne = `/assets/images/Single-House-1.png`; /*à supprimer ?*/
export const SingleHouseTwo = `/assets/images/Single-House-2.png`; /*à supprimer ?*/

export const houses: HouseModel[] = [
  {
    id: '0001',
    category: 'Maisons individuelles',
    date: new Date('2022') as any,
    status: 'underConstruction',
    missionCompleted: true,
    picture: "/assets/images/0001_Stuck/Maison Rochefort-10.webp",
    alt: 'Vue maison 0001',
    description: [
      
    ],
    concepts: [
      "/assets/images/0001_Stuck/Maison Rochefort-10.webp",
      "/assets/images/0001_Stuck/Maison Rochefort-1.webp",
      "/assets/images/0001_Stuck/Maison Rochefort-2.webp",
      "/assets/images/0001_Stuck/Maison Rochefort-3.webp",
      "/assets/images/0001_Stuck/Maison Rochefort-4.webp",
      "/assets/images/0001_Stuck/Maison Rochefort-5.webp",
      "/assets/images/0001_Stuck/Maison Rochefort-6.webp",
      "/assets/images/0001_Stuck/Maison Rochefort-7.webp",
      "/assets/images/0001_Stuck/Maison Rochefort-8.webp",
      "/assets/images/0001_Stuck/Maison Rochefort-9.webp",
    ],
  },
   
  {
    id: '0002',
    category: 'Maisons individuelles',
    date: new Date('2022') as any,
    status: 'inProgress',
    missionCompleted: false,
    picture: SingleHouseTwo,
    alt: 'Vue maison 0002',
    description: [
      
    ],
    concepts: [],
  },
  {
    id: '0012',
    category: 'Maisons individuelles',
    date: new Date('2022') as any,
    status: 'underConstruction',
    missionCompleted: true,
    picture: "/assets/images/0012_Harvey/0012_Harvey-1.webp",
    alt: 'Vue maison 0012',
    description: [   
    ],
    concepts: [
      "/assets/images/0012_Harvey/0012_Harvey-1.webp",
      "/assets/images/0012_Harvey/0012_Harvey-2.webp",
      "/assets/images/0012_Harvey/0012_Harvey-3.webp",
      "/assets/images/0012_Harvey/0012_Harvey-4.webp",
      "/assets/images/0012_Harvey/0012_Harvey-5.webp",
      "/assets/images/0012_Harvey/0012_Harvey-6.webp",
      "/assets/images/0012_Harvey/0012_Harvey-7.webp",
      "/assets/images/0012_Harvey/0012_Harvey-8.webp",
      "/assets/images/0012_Harvey/0012_Harvey-9.webp",
    ],
  },

{
    id: '0013',
    category: 'Maisons individuelles',
    date: new Date('2022') as any,
    status: 'inProgress',
    missionCompleted: false,
    picture: "/assets/images/0013_Pittie/0013_Pittie-15.webp",
    alt: 'Vue maison 0013',
    description: [
      {
        lan: 'fr',
        content: `à écrire`,
      },
      
    ],
    concepts: [
      "/assets/images/0013_Pittie/0013_Pittie-15.webp",
      "/assets/images/0013_Pittie/0013_Pittie-16.webp",
      "/assets/images/0013_Pittie/0013_Pittie-17.webp",
      "/assets/images/0013_Pittie/0013_Pittie-18.webp",
      "/assets/images/0013_Pittie/0013_Pittie-19.webp",
      "/assets/images/0013_Pittie/0013_Pittie-20.webp",
      "/assets/images/0013_Pittie/0013_Pittie-21.webp",
      "/assets/images/0013_Pittie/0013_Pittie-22.webp",
      "/assets/images/0013_Pittie/0013_Pittie-23.webp",
      "/assets/images/0013_Pittie/0013_Pittie-24.webp",
      "/assets/images/0013_Pittie/0013_Pittie-25.webp",
      "/assets/images/0013_Pittie/0013_Pittie-26.webp",
      "/assets/images/0013_Pittie/Maison_Uzes-1.webp",
      "/assets/images/0013_Pittie/Maison_Uzes-2.webp",
      "/assets/images/0013_Pittie/Maison_Uzes-3.webp",
      "/assets/images/0013_Pittie/Maison_Uzes-4.webp",
      "/assets/images/0013_Pittie/Maison_Uzes-5.webp",
      "/assets/images/0013_Pittie/Maison_Uzes-6.webp",
      "/assets/images/0013_Pittie/Maison_Uzes-7.webp",
      "/assets/images/0013_Pittie/Maison_Uzes-8.webp",
      "/assets/images/0013_Pittie/Maison_Uzes-9.webp",
      "/assets/images/0013_Pittie/Maison_Uzes-10.webp",
      "/assets/images/0013_Pittie/Maison_Uzes-11.webp",
      "/assets/images/0013_Pittie/Maison_Uzes-12.webp",
      "/assets/images/0013_Pittie/Maison_Uzes-13.webp",
      "/assets/images/0013_Pittie/Maison_Uzes-14.webp",
    ],
  },
  {
    id: '0017',
    category: 'ERP',
    date: new Date('2022') as any,
    status: 'underConstruction',
    missionCompleted: true,
    picture: "/assets/images/0017_IACCA/0017_IACCA-8.webp",
    alt: 'Vue erp 0017',
    description: [   
    ],
    concepts: [
      "/assets/images/0017_IACCA/0017_IACCA-8.webp",
      "/assets/images/0017_IACCA/0017_IACCA-1.webp",
      "/assets/images/0017_IACCA/0017_IACCA-2.webp",
      "/assets/images/0017_IACCA/0017_IACCA-3.webp",
      "/assets/images/0017_IACCA/0017_IACCA-4.webp",
      "/assets/images/0017_IACCA/0017_IACCA-5.webp",
      "/assets/images/0017_IACCA/0017_IACCA-6.webp",
      "/assets/images/0017_IACCA/0017_IACCA-7.webp",
      "/assets/images/0017_IACCA/0017_IACCA-9.webp",
    
    ],
  },
  {
    id: '0026',
    category: 'ERP',
    date: new Date('2022') as any,
    status: 'underConstruction',
    missionCompleted: true,
    picture: "/assets/images/0026_Tony Lainé/Hopital_Beaucaire-2.webp",
    alt: 'Vue erp 0026',
    description: [   
    ],
    concepts: [
      "/assets/images/0026_Tony Lainé/Hopital_Beaucaire-3.webp",
      "/assets/images/0026_Tony Lainé/Hopital_Beaucaire-4.webp",
      "/assets/images/0026_Tony Lainé/Hopital_Beaucaire-5.webp",
      "/assets/images/0026_Tony Lainé/Hopital_Beaucaire-7.webp",
      "/assets/images/0026_Tony Lainé/Hopital_Beaucaire-9.webp",
      "/assets/images/0026_Tony Lainé/Hopital_Beaucaire-10.webp",
      "/assets/images/0026_Tony Lainé/Hopital_Beaucaire-11.webp",
    
    ],
  },
  {
    id: '0040',
    category: 'ERP',
    date: new Date('2022') as any,
    status: 'underConstruction',
    missionCompleted: true,
    picture: "/assets/images/0040_Scanner Auriol/0040_02B.webp",
    alt: 'Vue erp 0040',
    description: [   
    ],
    concepts: [
      "/assets/images/0040_Scanner Auriol/0040_02B.webp",
      "/assets/images/0040_Scanner Auriol/0040_01A.webp",
      "/assets/images/0040_Scanner Auriol/0040_01B.webp",
      "/assets/images/0040_Scanner Auriol/0040_03A.webp",
      "/assets/images/0040_Scanner Auriol/0040_03B.webp",
      "/assets/images/0040_Scanner Auriol/0040_04.webp",
      "/assets/images/0040_Scanner Auriol/0040_05.webp",
      "/assets/images/0040_Scanner Auriol/0040_06.webp",
      "/assets/images/0040_Scanner Auriol/0040_07.webp",    
    ],
  },

  {
  id: '0053',
    category: 'Tertiaires',
    date: new Date('2025') as any,
    status: 'completed',
    missionCompleted: true,
    picture: "/assets/images/0053_EALICO/Bureaux Boulbon-5.jpg",
    alt: 'Vue bureaux 0053',
    description: [
      {
        lan: 'fr',
        content: `Bureaux EALICO à Boulbon`,
      },
      
    ],
    concepts: [
      "/assets/images/0053_EALICO/Bureaux Boulbon-5.jpg",
      "/assets/images/0053_EALICO/Bureaux Boulbon-1-floute.jpg",
      "/assets/images/0053_EALICO/Bureaux Boulbon-2-floute.jpg",
      "/assets/images/0053_EALICO/Bureaux Boulbon-3-floute.jpg",
      "/assets/images/0053_EALICO/Bureaux Boulbon-4-floute.jpg",
    ],
  },
];

export const imgLogo = `/assets/svg/logo.svg`;
export const ownerImg = `/assets/images/StefPic.png`;

export const getSliderImages = (id: string, value: number): string =>
  `/assets/images/animations/${id}/${value}.png`;

export const mappedKeyImages = [
  {
    key: '0001',
    maxCount: 15,
  },
  {
    key: '0002',
    maxCount: 14,
  },
  {
    key: '0053',
    maxCount: 10,
  },
];
