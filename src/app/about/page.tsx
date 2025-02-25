import { Circle, Heart, User2 } from 'lucide-react';

import Heading from '@/components/heading';
import { Badge } from '@/components/ui/badge';
import Aboutfooter from '@/components/about-footer';
import FramerWrapper from '@/components/animation/framer-wrapper';

// -----------------------------------------------------

const ITEMS = [
  { hobby: 'Coding' },
  { hobby: 'Playing Games' },
  { hobby: 'Tech Blog Writing' },
  { hobby: 'Creating Projects' },
];

export default function Page(): React.JSX.Element {
  return (
    <div className="h-full w-full relative flex flex-col items-start gap-5 overflow-hidden">
      <Badge variant="secondary" className="gap-1.5 py-1 ">
        <User2 className="h-4 w-4" />
        About me
      </Badge>
      <div className="flex flex-col gap-5">
        <Heading>
          Web/App <br /> Developer In Vietnam
        </Heading>

        <FramerWrapper y={0} x={100}>
          <p className=" font-poppins text-xl w-full text-primary max-sm:text-lg"></p>
        </FramerWrapper>
      </div>
      <FramerWrapper
        className="w-full flex flex-row justify-between max-lg:flex-col "
        y={100}
        delay={0.3}
      >
        <Aboutfooter />
      </FramerWrapper>
      <FramerWrapper className="block" y={100} delay={0.31}>
        <h1 className="gap-2 text-3xl font-poppins text-primary font-semibold flex icon_underline relative max-sm:text-2xl">
          {' '}
          <Heart className="h-8 w-8" /> Hobbies
        </h1>
        <div className="w-full h-fit p-2 flex flex-row justify-between gap-7 max-lg:flex-col">
          {ITEMS.map((val, index) => {
            return (
              <div
                key={index}
                className="flex gap-2 justify-center items-center flex-row text-xl text-primary pt-3 max-lg:justify-start "
              >
                <Circle className="h-3 w-3" /> {val.hobby}
              </div>
            );
          })}
        </div>
      </FramerWrapper>
    </div>
  );
}
