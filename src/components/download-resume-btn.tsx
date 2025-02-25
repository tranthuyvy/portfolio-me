import React from 'react';
import HackerBtn from './animation/hacker-btn';

// ----------------------------------------------------------

export default function DownloadResume(): React.JSX.Element {
  return (
    <div className="h-fit w-full mt-2 py-2 px-4">
      <HackerBtn label="Download Resume" />
    </div>
  );
}
