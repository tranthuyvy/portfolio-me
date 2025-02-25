import FramerWrapper from './animation/framer-wrapper';

// ---------------------------------------------------------------

interface HeadingProps {
  children: React.ReactNode;
}

export default function Heading({ children }: HeadingProps): React.JSX.Element {
  return (
    <FramerWrapper y={0} x={-100}>
      <h1 className="font-poppins text-primary font-bold text-4xl name_underline max-sm:text-2xl">
        {children}
      </h1>
    </FramerWrapper>
  );
}
