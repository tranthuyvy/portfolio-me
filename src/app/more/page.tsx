import Link from 'next/link';
import { ExternalLink, PackagePlus } from 'lucide-react';

import Heading from '@/components/heading';
import { Badge } from '@/components/ui/badge';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { buttonVariants } from '@/components/ui/button';
import FramerWrapper from '@/components/animation/framer-wrapper';

import { cn } from '@/lib/utils';

// ----------------------------------------------------------------

const MORELINK = [
  {
    title: 'Donate a coffee',
    description:
      'If you like my work and want to support me, you can buy me a coffee.',
    link: 'https://me.momo.vn/tranthuyvy',
  },
];

export default function MorePage(): React.JSX.Element {
  return (
    <div className="h-full w-full relative flex flex-col items-start gap-5 overflow-hidden">
      <Badge variant="secondary" className="gap-1.5 py-1 ">
        <PackagePlus className="h-4 w-4" />
        More
      </Badge>
      <div className="flex flex-col gap-3">
        <Heading>More</Heading>
      </div>
      <div className="h-auto w-full flex flex-wrap gap-3 p-2">
        {MORELINK.map((value, index) => {
          return (
            <FramerWrapper
              key={index}
              className="max-w-[32%] max-lg:max-w-full"
              y={0}
              scale={0.8}
              delay={index / 4}
              duration={0.15}
            >
              <Card className="w-full">
                <CardHeader>
                  <CardTitle>{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-base font-poppins ">{value.description}</p>
                </CardContent>
                <CardFooter>
                  <Link
                    href={value.link}
                    target="blank"
                    className={cn(
                      buttonVariants({ variant: 'default', size: 'lg' }),
                      'w-full gap-3'
                    )}
                  >
                    {' '}
                    <ExternalLink />
                    Visit here
                  </Link>
                </CardFooter>
              </Card>
            </FramerWrapper>
          );
        })}
      </div>
    </div>
  );
}
