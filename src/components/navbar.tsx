'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import {
  User,
  Mail,
  HomeIcon,
  FolderGit2,
  LightbulbIcon,
  GraduationCap,
  MoreHorizontal,
} from 'lucide-react';

import {
  Dock,
  DockIcon,
  DockItem,
  DockLabel,
} from '@/components/animation/dock-animation';

import { cn } from '@/lib/utils';

// -----------------------------------------------------

const DATA = [
  {
    title: 'Home',
    icon: <HomeIcon className="h-full w-full" />,
    href: '/',
  },
  {
    title: 'About',
    icon: <User className="h-full w-full" />,
    href: '/about',
  },
  {
    title: 'Skills',
    icon: <LightbulbIcon className="h-full w-full" />,
    href: '/skills',
  },
  {
    title: 'Education',
    icon: <GraduationCap className="h-full w-full" />,
    href: '/education',
  },
  {
    title: 'Projects',
    icon: <FolderGit2 className="h-full w-full" />,
    href: '/projects',
  },

  {
    title: 'Contact me',
    icon: <Mail className="h-full w-full" />,
    href: '/contact',
  },
  {
    title: 'More',
    icon: <MoreHorizontal className="h-full w-full" />,
    href: '/more',
  },
];

export default function Navbar(): React.JSX.Element {
  const pathname = usePathname();
  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div
      className={cn(
        'fixed top-5 right-0 left-0 px-0 sm:px-5 m-auto w-full sm:w-fit bg-transparent z-[+9999999] block',
        {
          scrolling: 'hidden',
        }
      )}
    >
      <Dock className="items-end pb-3 rounded-full">
        {DATA.map((item, idx) => (
          <Link href={item.href} key={idx}>
            <DockItem
              className={cn(
                'aspect-square rounded-full bg-gray-200 dark:bg-neutral-800',
                pathname === item.href &&
                  'bg-gray-100 border! border-primary-sky!'
              )}
            >
              <DockLabel>{item.title}</DockLabel>
              <DockIcon
                className={cn(pathname === item.href && 'text-[#2f7df4]')}
              >
                {item.icon}
              </DockIcon>
            </DockItem>
          </Link>
        ))}
      </Dock>
    </div>
  );
}
