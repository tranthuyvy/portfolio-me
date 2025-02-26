import { Layers } from 'lucide-react';

import Heading from '@/components/heading';
import { Badge } from '@/components/ui/badge';
import ProjectCards from '@/components/projects-card';
import FramerWrapper from '@/components/animation/framer-wrapper';

import { project } from '../data/project';

// -----------------------------------------------------

export default function ProjectPage(): React.JSX.Element {
  return (
    <div className="h-full w-full relative flex flex-col items-start gap-5 overflow-y-scroll scrollbar-hide">
      <Badge variant="secondary" className="gap-1.5 py-1 ">
        <Layers className="h-4 w-4" />
        Projects
      </Badge>
      <div className="flex flex-col gap-3">
        <Heading>My Projects</Heading>
        <FramerWrapper y={0} x={200}>
          <p className=" font-poppins text-lg w-full text-primary max-sm:text-base">
            Following projects showcases my skills. Each project is briefly
            described with links to source code repositories and live demos. It
            reflects my ability to solve complex problems, work with different
            technologies, and manage projects effectively.
          </p>
        </FramerWrapper>
      </div>

      <div className=" w-full flex flex-row flex-wrap gap-3 max-lg:flex-col">
        {project.map((val, index) => {
          return <ProjectCards key={index} value={val} num={index} />;
        })}
      </div>
    </div>
  );
}
