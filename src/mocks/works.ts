export type Technology = {
  name: string;
  img: string;
};

export type Work = {
  id: string;
  title: string;
  img: string;
  github: URL | string;
  hasDeploy: boolean;
  deployLink: URL | string;
  description: string;
  technologiesFront?: Technology[];
  technologiesBack?: Technology[];
};

export const works: Work[] = [
  {
    id: '3b5e9c2d-3f3f-42e2-8b49-051e1a945f57',
    title: 'Jaca gallery',
    img: 'https://github.com/images-organization/myimages/blob/main/imgs/miscellaneous/gallery.png?raw=true',
    github: 'https://github.com/images-organization/myimages',
    hasDeploy: true,
    deployLink: 'https://jacaimages.vercel.app',
    description:
      'Minha galeria para garantir que as imagens utilizadas nos meus projetos provenham de uma fonte sobre a qual eu tenha controle e autoridade.',
    technologiesFront: [
      {
        name: 'HTML5',
        img: 'https://github.com/tandpfun/skill-icons/raw/main/icons/HTML.svg',
      },

      {
        name: 'CSS3',
        img: 'https://github.com/tandpfun/skill-icons/raw/main/icons/CSS.svg',
      },
    ],
    technologiesBack: [
      {
        name: 'javaScript',
        img: 'https://github.com/tandpfun/skill-icons/raw/main/icons/JavaScript.svg',
      },
    ],
  },
  {
    id: 'FAWWdjfsENf',
    title: 'El Geladon ',
    img: 'https://jacaimages.vercel.app/imgs/miscellaneous/elgeladon.png',
    github:
      'https://github.com/RamonMarcelLopes/projeto-finalM3-front-react/tree/ReworkTypeScript',
    hasDeploy: true,
    deployLink: 'https://elgeladontypescript.vercel.app',
    description: ` O projeto El Geladon  
    visa criar uma plataforma virtual que simula a experiência de
     uma paleteria tradicional, oferecendo uma variedade de Paletas para os clientes.`,
    technologiesFront: [
      {
        name: 'REACT',
        img: 'https://github.com/tandpfun/skill-icons/raw/main/icons/React-Dark.svg',
      },

      {
        name: 'CSS3',
        img: 'https://github.com/tandpfun/skill-icons/raw/main/icons/CSS.svg',
      },
      {
        name: 'Axios',
        img: 'https://user-images.githubusercontent.com/8939680/57233884-20344080-6fe5-11e9-8df3-0df1282e1574.png',
      },
      {
        name: 'Vite',
        img: 'https://github.com/tandpfun/skill-icons/raw/main/icons/Vite-Dark.svg',
      },
      {
        name: 'Type script',
        img: 'https://github.com/tandpfun/skill-icons/raw/main/icons/TypeScript.svg',
      },
    ],
    technologiesBack: [],
  },
  {
    id: '3b5e9c2d-3f3f-42e2-8b49-051e5un',
    title: 'Xbox',
    img: 'https://jacaimages.vercel.app/imgs/miscellaneous/XboxSwagger.png',
    github: 'https://github.com/RamonMarcelLopes/Xbox-hud-nestTS',
    hasDeploy: false,
    deployLink: '',
    description: `O projeto Xbox tem como objetivo
       replicar os principais componentes
      do sistema de back-end do console Xbox`,
    technologiesFront: [],
    technologiesBack: [
      {
        name: 'Type script',
        img: 'https://github.com/tandpfun/skill-icons/raw/main/icons/TypeScript.svg',
      },
      {
        name: 'Nest JS',
        img: 'https://github.com/tandpfun/skill-icons/raw/main/icons/NestJS-Dark.svg',
      },
      {
        name: 'Prisma',
        img: 'https://github.com/tandpfun/skill-icons/raw/main/icons/Prisma.svg',
      },
      {
        name: 'PostgreSQL',
        img: 'https://github.com/tandpfun/skill-icons/raw/main/icons/PostgreSQL-Dark.svg',
      },
      {
        name: 'Swagger',
        img: 'https://static-00.iconduck.com/assets.00/swagger-icon-512x512-halz44im.png',
      },
    ],
  },
];
