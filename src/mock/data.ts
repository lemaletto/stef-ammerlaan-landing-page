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
    isLink: true,
  },
  {
    name: 'Maisons',
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
    ],
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

export const SingleHouseOne = `/assets/images/Single-House-1.png`;
export const SingleHouseTwo = `/assets/images/Single-House-2.png`;

export const houses: HouseModel[] = [
  {
    id: '0001',
    date: new Date('2022') as any,
    status: 'underConstruction',
    missionCompleted: true,
    picture: SingleHouseOne,
    alt: 'Vue maison 0001',
    description: [
      {
        lan: 'fr',
        content: `Située à Rochefort-du-Gard (30), la Maison 0001 se recroqueville en limite Nord contre le Mistral et s’ouvre sur le jardin coté Sud tout en maîtrisant les apports caloriques solaires.

        L’ouverture en double hauteur du volume central est abritée du soleil l’été et est exposée l’hiver, suivant l’angle et l’azimut du soleil au cours de l’année.
        
        La rétention des eaux de pluies est traitée partiellement en toiture afin d’absorber en partie les pluies cévennoles, 
         
        L’architecture méditerranéenne est revisitée.`,
      },
      {
        lan: 'en',
        content: `Located in Rochefort-du-Gard (30), The “Maison 0001” shrivells to the North limit against the cold wind (Mistral) and opens up on the south garden while controlling solar exposure.

        The double height opening in the center volume is shaded in the summer and exposed in the winter, following the sun’s angle and azimuth through the year. 
        
        Water can be stocked on the roof in order to absorb Cevennol’s Rainfalls, (annual rainfall season)   
        
        Mediterranean architecture is revisited.`,
      },
    ],
    concepts: [],
  },
  {
    id: '0002',
    date: new Date('2022') as any,
    status: 'inProgress',
    missionCompleted: false,
    picture: SingleHouseTwo,
    alt: 'Vue maison 0002',
    description: [
      {
        lan: 'fr',
        content: `Située à Garons (30), la Maison 0002 est constituée de 3 volumes empilés. 
        Le premier bloc le plus à l’Est est un garage,
        Le deuxième bloc, le plus à l'ouest constitue la zone diurne de la maison.
        Le dernier bloc, qui relie les deux premiers par empilement, constitue la zone nocturne de  la maison. Ce volume est doublé d’une passerelle reliant de l'extérieur les 2 premiers volumes. 
        Cette disposition permet de créer en Rez-de-Chaussée un espace “en plus” : une terrasse couverte et ventilée, idéale pour un confort d’été. 
        `,
      },
      {
        lan: 'en',
        content: `Located in  Garons (30), The “Maison 0002” is composed by 3 overlaping volumes.
        The most easterly bloc is a garage 
        The most westerly bloc is composed by the daytime rooms.
        The last overlaping bloc is used for the night rooms. in addition, a walkway is connecting the first 2 blocs outside.
        This architecture creates a new room icing on the cake in the summer : a shaded covered and windy terrace. `,
      },
    ],
    concepts: [],
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
];
