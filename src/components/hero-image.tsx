import Image from 'next/image';

import logo from '../../public/face.jpg';

// -------------------------------------------------

export default function HeroImage(): React.JSX.Element {
  return (
    <Image
      src={logo}
      alt="logo"
      loading="eager"
      priority
      height={1000}
      width={1000}
    />
  );
}
