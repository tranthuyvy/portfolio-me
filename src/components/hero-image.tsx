import Image from 'next/image';

import logo from '../../public/face.png';

// -------------------------------------------------

export default function HeroImage(): React.JSX.Element {
  return (
    <Image
      src={logo}
      alt="logo"
      loading="eager"
      priority
      height={500}
      width={500}
      unoptimized
    />
  );
}
