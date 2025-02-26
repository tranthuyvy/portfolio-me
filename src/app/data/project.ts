interface ProjectCardType {
  title: string;
  description: string;
  tags: string[];
  link: string;
}

export const project: ProjectCardType[] = [
  {
    title: 'Project Car Showcase',
    description:
      'The project is built using NextJS and TailwindCSS. Users can view and filter detailed information about cars.',
    tags: ['Rapid-api', 'NextJS', 'TailwindCSS'],
    link: 'https://carshowcase-7q8rpzjn9-tran-vys-projects.vercel.app/',
  },
];
