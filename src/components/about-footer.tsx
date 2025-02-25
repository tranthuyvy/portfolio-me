import { Circle, Dna, Globe2, Languages } from 'lucide-react';

// ------------------------------------------------------------

const ITEMS = [
  {
    name: 'Language',
    answer: 'Vietnamese',
    icon: <Languages className="h-11 w-11" />,
  },
  {
    name: 'Nationality',
    answer: 'Ho Chi Minh, Vietnam',
    icon: <Globe2 className="h-8 w-8" />,
  },
  { name: 'Gender', answer: 'Female', icon: <Dna className="h-8 w-8" /> },
];

export default function Aboutfooter(): React.JSX.Element {
  return (
    <>
      {ITEMS.map((val, index) => {
        return (
          <div className="p-1 w-fit relative" key={index}>
            <h1 className="gap-2 text-3xl font-poppins text-primary font-semibold relative flex icon_underline max-sm:text-2xl">
              {val.icon}
              {val.name}
            </h1>
            <div className="flex gap-2 justify-center items-center flex-row text-xl text-primary pt-3 max-lg:justify-start">
              <Circle className="h-3 w-3" /> {val.answer}
            </div>
          </div>
        );
      })}
    </>
  );
}
