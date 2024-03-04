export type Technology = {
  name: string;
  img: string;
};

export type Work = {
  id: string;
  title: string;
  img: string;
  github: string;
  hasDeploy: boolean;
  deployLink: string;
  technologiesFront: Technology[];
  technologiesBack: Technology[];
};

export const works: Work[] = [
  {
    id: '3b5e9c2d-3f3f-42e2-8b49-051e1a945f57',
    title: 'El geladon',
    img: 'https://imgdoprojeto',
    github: 'https://teste',
    hasDeploy: true,
    deployLink: 'https://teste',
    technologiesFront: [
      {
        name: 'react',
        img: 'https://react.png',
      },
      { name: 'typeScript', img: 'https://typescript.png' },
      {
        name: 'css3',
        img: 'https://css3.png',
      },
    ],
    technologiesBack: [
      {
        name: 'javaScript',
        img: 'https://javaScript.png',
      },
      {
        name: 'swagger',
        img: 'https://swagger.png',
      },
    ],
  },
];
