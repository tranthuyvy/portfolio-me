import { TagEnum } from '@/types/tags';
import { ProjectCardType } from '@/types/project-card';

// ------------------------------------------------------------

export const project: ProjectCardType[] = [
  {
    title: 'Real Estate Application',
    description:
      'A real estate application that allows users to view and filter properties. The project is built using React Native and Nativewind.',
    tags: [TagEnum.REACT_NATIVE, TagEnum.NATIVEWIND, TagEnum.APP_WRITE],
    banner: '/banner/real-estate.png',
    link: 'https://github.com/tranthuyvy/real-estate-app',
  },
  {
    title: 'Project Car Showcase',
    description:
      'The project is built using NextJS and TailwindCSS. Users can view and filter detailed information about cars.',
    tags: [TagEnum.RAPID_API, TagEnum.NEXT_JS, TagEnum.TAILWIND_CSS],
    banner: '/banner/car_showcase.jpg',
    link: 'https://github.com/tranthuyvy/car_showcase',
    demoLink: 'https://carshowcase-rho-six.vercel.app/',
  },
  {
    title: 'Project Web 3.0',
    description:
      'The first blockchain website built using Web 3.0 methodologies, Solidity, and Metamask. Users can track transaction history.',
    tags: [TagEnum.REACT_JS, TagEnum.SOLIDITY, TagEnum.WEB_3, TagEnum.METAMASK],
    banner: '/banner/web3.png',
    link: 'https://github.com/tranthuyvy/project_web3',
    demoLink: 'https://project-web3-pink.vercel.app/',
  },

  {
    title: 'Mini Project Three.js',
    description:
      'A website built using Three.js for 3D graphics, React and Tailwind CSS for flexible and visually appealing design.',
    tags: [TagEnum.REACT_JS, TagEnum.THREE_JS, TagEnum.TAILWIND_CSS],
    banner: '/banner/cv-contact.png',
    link: 'https://github.com/tranthuyvy/mini_project_threejs',
    demoLink: 'https://ttv-tranthuyvy-cv.vercel.app/',
  },
  {
    title: 'Customizing T-Shirt AI',
    description:
      'Design T-Shirt Customizing Website, can upload custom logos, texture files or write AI Prompt generate logos, textures for T-shirt',
    tags: [TagEnum.REACT_JS, TagEnum.TAILWIND_CSS, TagEnum.THREE_JS],
    banner: '/banner/custom.png',
    link: 'https://github.com/tranthuyvy/ttv-design-shirt-ai',
    demoLink: 'https://ttv-fe-design-shirt-ai.vercel.app/',
  },
  {
    title: 'Trello',
    description:
      'A website built based on Trello, utilizing Vite for fast performance. User interface developed with ReactJs and Material.',
    tags: [TagEnum.REACT_JS, TagEnum.MATERIAL_UI],
    banner: '/banner/trello_light.png',
    link: 'https://github.com/tranthuyvy/Trello_Vite',
    demoLink: 'https://ttv-trello.vercel.app/',
  },
  {
    title: 'Food Delivery',
    description:
      'Food delivery website with user-friendly interface, implementing responsive design, allows you to manage your cart, orders.',
    tags: [TagEnum.REACT_JS, TagEnum.SCSS],
    banner: '/banner/food.png',
    link: 'https://github.com/tranthuyvy/food_delivery',
    demoLink: 'https://ttv-delivery.vercel.app/home',
  },
  {
    title: 'Alan AI',
    description:
      'Conversational Voice Controlled React News Application using Alan AI, allows you control absolutely everything using your voice.',
    tags: [TagEnum.REACT_JS],
    banner: '/banner/alan.png',
    link: 'https://github.com/tranthuyvy/alan_ai',
  },
  {
    title: 'Vfiverr Website',
    description:
      'Website inspiration from Fiverr website, is online platform to connections between buyers and sellers (Network Freelancer).',
    tags: [TagEnum.REACT_JS],
    banner: '/banner/vfiverr.png',
    link: 'https://github.com/tranthuyvy/Vfiverr.git',
  },
  {
    title: 'Netflix Clone',
    description:
      'Drawing inspiration from Netflix app. I designed user interface using ReactJS, calls API from The Movie Database (TMDB).',
    tags: [TagEnum.REACT_JS, TagEnum.TAILWIND_CSS],
    banner: '/banner/movie.png',
    link: 'https://github.com/tranthuyvy/FE_Movie',
    demoLink: 'https://the-movie-f2cd8.web.app/',
  },
  {
    title: 'Mobile E-commerce Application',
    description:
      'Using Android Studio and manage the MySQL database. Users can purchase and place orders through the app.',
    tags: [TagEnum.ANDROID_STUDIO, TagEnum.JAVA],
    banner: '/banner/mobileselling.png',
    link: 'https://github.com/tranthuyvy/AppBanHang',
  },
  {
    title: 'Sneaker E-commerce',
    description:
      'Users interface easy shopping, ordering and convenient product reviews, along with various features for management.',
    tags: [TagEnum.REACT_JS, TagEnum.TAILWIND_CSS],
    banner: '/banner/ecommerce.jpg',
    link: 'https://github.com/tranthuyvy/ecommerce_FE',
  },
];
