import TextRotator from './text-rotator';

// --------------------------------------------------

export default function HeroTitle(): React.JSX.Element {
  return (
    <>
      <h3 className="font-poppins text-2xl max-sm:text-xl">My Name is</h3>
      <h1 className="font-rubik text-8xl name_underline text-primary max-sm:text-6xl ">
        Tran <br /> Thuy Vy.
      </h1>
      <TextRotator />
    </>
  );
}
