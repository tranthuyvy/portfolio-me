import HeroTitle from '@/components/hero-title';
import HeroImage from '@/components/hero-image';
import SocialLinks from '@/components/social-links';
import GithubBtn from '@/components/animation/github-btn';
import DownloadResume from '@/components/download-resume-btn';
import FramerWrapper from '@/components/animation/framer-wrapper';

// ---------------------------------------------------------------

export const siteConfig = {
  name: 'Tran Thuy Vy',
  description: 'I am a Frontend Developer',
  ogImage: 'https://ttv-tranthuyvy-cv.vercel.app/banner.png',
  url: 'https://ttv-tranthuyvy-cv.vercel.app/',
};

export default function Home(): React.JSX.Element {
  return (
    <>
      <FramerWrapper
        className="h-full w-auto flex flex-col justify-start gap-4"
        y={0}
        x={-100}
      >
        <HeroTitle />
        <div className="h-fit w-full p-4 flex gap-4">
          <SocialLinks />
        </div>
        <DownloadResume />
      </FramerWrapper>

      <FramerWrapper
        className="h-full w-[30%] relative block max-lg:hidden"
        y={0}
        x={100}
      >
        <HeroImage />
      </FramerWrapper>

      <GithubBtn />
    </>
  );
}
