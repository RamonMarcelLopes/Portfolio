export type Technology = {
  id: string;
  name: string;
  img: string;
};
export let technology: Technology[] = [
  {
    id: 'a9d8888b47',
    name: 'css3',
    img: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg',
  },

  {
    id: 'b9d83b47',
    name: 'Express.js',
    img: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original-wordmark.svg',
  },
  {
    id: '5c1f20e8',
    name: 'Figma',
    img: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/figma/figma-original.svg',
  },
  {
    id: 'b6a7c3d9',
    name: 'Git',
    img: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/git/git-original-wordmark.svg',
  },
  {
    id: 'f024e5b2',
    name: 'HTML5',
    img: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg',
  },
  {
    id: '7d89a1fc',
    name: 'JavaScript',
    img: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg',
  },
  {
    id: 'e3b4f5a0',
    name: 'MongoDB',
    img: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg',
  },
  {
    id: '9c6d2f18',
    name: 'NestJS',
    img: 'data:image/png;base64,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',
  },
  {
    id: '3e7a8b59',
    name: 'Node.js',
    img: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg',
  },
  {
    id: 'd5c0e91a',
    name: 'PostgreSQL',
    img: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-original-wordmark.svg',
  },
  {
    id: '821f6b4d',
    name: 'SQL',
    img: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original-wordmark.svg',
  },
  {
    id: '5a3c9d8e',
    name: 'Axios',
    img: 'https://files.svgcdn.io/logos/axios.png',
  },
  {
    id: '0b7e6f51',
    name: 'React',
    img: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg',
  },
  {
    id: 'c9a2d4e3',
    name: 'TypeScript',
    img: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg',
  },
  {
    id: '4f6b7a8c',
    name: 'Styled Components',
    img: 'https://www.styled-components.com/atom.png',
  },
  {
    id: 'e1d3f2a5',
    name: 'Prisma',
    img: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/prisma/prisma-original.svg',
  },
  {
    id: '8c9a1b2d',
    name: 'Discord.js',
    img: 'https://avatars.githubusercontent.com/u/26492485?s=200&v=4',
  },
];
