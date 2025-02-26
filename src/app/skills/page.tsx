import React from 'react';
import { LightbulbIcon } from 'lucide-react';

import Heading from '@/components/heading';
import { Badge } from '@/components/ui/badge';
import SkillsFooter from '@/components/skills-footer';

import { technologies } from '../data/technologies';

// --------------------------------------------------------------

export default function SkillPage(): React.JSX.Element {
  return (
    <div className="h-full w-full relative flex flex-col items-start gap-5 overflow-hidden">
      <Badge variant="secondary" className="gap-1.5 py-1">
        <LightbulbIcon className="w-4 h-4" />
        My Skills
      </Badge>

      <Heading>My Technical Experience/Skills</Heading>

      <SkillsFooter items={technologies} />
    </div>
  );
}
