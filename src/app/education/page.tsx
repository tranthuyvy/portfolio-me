import React from 'react';
import { Briefcase } from 'lucide-react';

import Heading from '@/components/heading';
import { Badge } from '@/components/ui/badge';
import FramerWrapper from '@/components/animation/framer-wrapper';

// -----------------------------------------------------

export default function EducationPage(): React.JSX.Element {
  return (
    <div className="h-full w-full relative flex flex-col items-start gap-5 overflow-hidden">
      <Badge variant="secondary" className="gap-1.5 py-1 ">
        <Briefcase className="h-4 w-4" />
        Education
      </Badge>
      <div className="flex flex-col gap-3">
        <Heading>My Education</Heading>
      </div>
      <div className="w-full h-fit flex flex-col">
        <div className="w-full h-fit flex">
          <FramerWrapper
            y={0}
            x={-100}
            delay={0.35}
            className="w-1/4 font-rubik flex items-center justify-evenly text-lg max-sm:text-base "
          >
            2019 - 2023
          </FramerWrapper>
          <FramerWrapper
            y={0}
            x={100}
            delay={0.35}
            className="relative w-3/4 border-l-4 border-l-[#3c3c3c] p-4 gap-3 education_point "
          >
            <div className="text-2xl font-rubik max-sm:text-xl">
              Posts and Telecommunications Institute of Technology <br /> at Ho
              Chi Minh City
            </div>
            <p className="font-poppins text-base w-full text-primary max-sm:text-xs">
              Received a Good Scholarship in the first semester of the second
              year and the first semester of the third year.
            </p>
          </FramerWrapper>
        </div>
      </div>
    </div>
  );
}
