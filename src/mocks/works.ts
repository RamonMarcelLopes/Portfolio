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
    technologiesFront: [
      {
        name: 'HTML5',
        img: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg',
      },

      {
        name: 'css3',
        img: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg',
      },
    ],
    technologiesBack: [
      {
        name: 'javaScript',
        img: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg',
      },
    ],
  },
  {
    id: '3b5e9c2d-3f3f-42e2-8b49-051e1a945f57',
    title: 'Jaca gallery',
    img: 'https://github.com/images-organization/myimages/blob/main/imgs/miscellaneous/gallery.png?raw=true',
    github: 'https://github.com/images-organization/myimages',
    hasDeploy: false,
    deployLink: 'https://jacaimages.vercel.app',
    technologiesFront: [
      {
        name: 'HTML5',
        img: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg',
      },

      {
        name: 'css3',
        img: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg',
      },
    ],
    technologiesBack: [
      {
        name: 'javaScript',
        img: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg',
      },
    ],
  },
  {
    id: '3b5e9c2d-3f3f-42e2-8b49-051e1a945f57',
    title: 'Jaca gallery',
    img: 'https://github.com/images-organization/myimages/blob/main/imgs/miscellaneous/gallery.png?raw=true',
    github: 'https://github.com/images-organization/myimages',
    hasDeploy: false,
    deployLink: 'https://jacaimages.vercel.app',
    technologiesFront: [
      {
        name: 'HTML5',
        img: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg',
      },

      {
        name: 'css3',
        img: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg',
      },
    ],
    technologiesBack: [
      {
        name: 'javaScript',
        img: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg',
      },
    ],
  },
  {
    id: '3b5e9c2d-3f3f-42e2-8b49-051e1a945f57',
    title: 'Jaca gallery',
    img: 'https://github.com/images-organization/myimages/blob/main/imgs/miscellaneous/gallery.png?raw=true',
    github: 'https://github.com/images-organization/myimages',
    hasDeploy: true,
    deployLink: 'https://jacaimages.vercel.app',
    technologiesFront: [
      {
        name: 'HTML5',
        img: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg',
      },

      {
        name: 'css3',
        img: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg',
      },
    ],
    technologiesBack: [
      {
        name: 'javaScript',
        img: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg',
      },
    ],
  },
  {
    id: '3b5e9c2d-3f3f-42e2-8b49-051e1a945f57',
    title: 'Jaca gallery',
    img: 'https://github.com/images-organization/myimages/blob/main/imgs/miscellaneous/gallery.png?raw=true',
    github: 'https://github.com/images-organization/myimages',
    hasDeploy: false,
    deployLink: 'https://jacaimages.vercel.app',
    technologiesFront: [
      {
        name: 'HTML5',
        img: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg',
      },

      {
        name: 'css3',
        img: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg',
      },
    ],
    technologiesBack: [
      {
        name: 'javaScript',
        img: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg',
      },
    ],
  },
];
