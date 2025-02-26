import React from 'react';
import type { StaticImageData } from 'next/image';

import BallCanvas from './canvas/ball';

// ------------------------------------------------------------

interface ArrayType {
  name: string;
  icon: StaticImageData;
}

interface Props {
  items: Array<ArrayType>;
}

export default function SkillsFooter({ items }: Props): React.JSX.Element {
  return (
    <div className="flex flex-row flex-wrap justify-center gap-10">
      {items.map((tech) => (
        <div className="w-28 h-28" key={tech.name}>
          <BallCanvas icon={tech.icon} />
        </div>
      ))}
    </div>
  );
}
