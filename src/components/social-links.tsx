import React from 'react';
import Link from 'next/link';
import { Github, Facebook, Linkedin, ExternalLink } from 'lucide-react';

import { cn } from '@/lib/utils';
import { buttonVariants } from './ui/button';

import FramerWrapper from './animation/framer-wrapper';

// -----------------------------------------------------

const LINKS = [
  {
    name: 'Facebook',
    link: 'https://www.facebook.com/vytrant.dev',
    icon: <Facebook />,
  },
  {
    name: 'Github',
    link: 'https://github.com/tranthuyvy',
    icon: <Github />,
  },
  {
    name: 'Linkedin',
    link: 'https://www.linkedin.com/in/vytrant/',
    icon: <Linkedin />,
  },
  {
    name: 'External',
    link: 'https://ttv-tranthuyvy-cv.vercel.app/',
    icon: <ExternalLink />,
  },
];

export default function SocialLinks(): React.JSX.Element {
  return (
    <>
      {LINKS.map((item, index) => {
        const timing = 0.55 + index * 0.125;

        return (
          <FramerWrapper key={index} delay={timing} y={50}>
            <Link
              target="blank"
              href={item.link}
              className={cn(
                buttonVariants({ variant: 'outline', size: 'icon' })
              )}
            >
              {item.icon}
            </Link>
          </FramerWrapper>
        );
      })}
    </>
  );
}
