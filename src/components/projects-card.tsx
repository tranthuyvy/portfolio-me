import Link from 'next/link';
import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { cn } from '@/lib/utils';

import { TagEnum } from '@/types/tags';
import { ProjectCardType } from '@/types/project-card';

import { buttonVariants } from './ui/button';
import FramerWrapper from './animation/framer-wrapper';

// ------------------------------------------------------------

interface ProjectCardProps {
  value: ProjectCardType;
  num: number;
}

export default function ProjectCards({
  value,
  num,
}: ProjectCardProps): React.JSX.Element {
  return (
    <FramerWrapper
      className="max-w-[32%] max-lg:max-w-full"
      y={0}
      scale={0.8}
      delay={num / 4}
      duration={0.15}
    >
      <Card className="w-full h-full flex flex-col hover:shadow-lg transition-all duration-300">
        <Image
          src={value.banner}
          alt={value.title}
          width={200}
          height={200}
          className="object-cover w-full h-[12.5rem] mx-auto rounded-t-lg"
        />

        <CardHeader className="pb-2">
          <CardTitle className="text-xl font-bold text-primary">
            {value.title}
          </CardTitle>
        </CardHeader>

        <CardContent className="grow flex flex-col gap-4">
          <p className="text-sm text-muted-foreground leading-relaxed">
            {value.description}
          </p>

          <div className="flex flex-wrap gap-2">
            {value.tags.map((tag: string, index: number) => {
              const tagStyles =
                {
                  [TagEnum.APP_WRITE]: 'bg-red-100 text-red-800',
                  [TagEnum.WEB_3]: 'bg-orange-100 text-orange-800',
                  [TagEnum.METAMASK]: 'bg-amber-100 text-amber-800',
                  [TagEnum.SOLIDITY]: 'bg-yellow-100 text-yellow-800',
                  [TagEnum.RAPID_API]: 'bg-emerald-100 text-emerald-800',
                  [TagEnum.ANDROID_STUDIO]: 'bg-lime-100 text-lime-800',
                  [TagEnum.JAVA]: 'bg-fuchsia-100 text-fuchsia-800',
                  [TagEnum.REACT_NATIVE]: 'bg-cyan-100 text-cyan-800',
                  [TagEnum.NATIVEWIND]: 'bg-green-100 text-green-800',
                  [TagEnum.SCSS]: 'bg-rose-100 text-rose-800',
                  [TagEnum.NEXT_JS]: 'bg-sky-100 text-sky-800',
                  [TagEnum.REACT_JS]: 'bg-blue-100 text-blue-800',
                  [TagEnum.TAILWIND_CSS]: 'bg-teal-100 text-teal-800',
                  [TagEnum.MATERIAL_UI]: 'bg-indigo-100 text-indigo-800',
                  [TagEnum.THREE_JS]: 'bg-zinc-100 text-zinc-800',
                }[tag] || 'bg-gray-100 text-gray-800';

              return (
                <span
                  key={index}
                  className={cn(
                    'inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium',
                    tagStyles
                  )}
                >
                  {tag}
                </span>
              );
            })}
          </div>
        </CardContent>

        <CardFooter className="flex gap-3 pt-2">
          {value.demoLink ? (
            <Link
              href={value.demoLink}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                buttonVariants({
                  variant: 'default',
                  size: 'sm',
                }),
                'w-fit transition-all hover:translate-y-[-2px] hover:shadow-md group'
              )}
            >
              View Demo
              <ArrowUpRight className="h-4 w-4 ml-1 hidden group-hover:block -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200" />
            </Link>
          ) : null}

          <Link
            href={value.link}
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              buttonVariants({
                variant: 'default',
                size: 'sm',
                className: 'bg-blue-600 hover:bg-blue-800',
              }),
              'w-fit transition-all hover:translate-y-[-2px] hover:shadow-md group'
            )}
          >
            Github Project
            <ArrowUpRight className="h-4 w-4 ml-1 hidden group-hover:block -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200" />
          </Link>
        </CardFooter>
      </Card>
    </FramerWrapper>
  );
}
