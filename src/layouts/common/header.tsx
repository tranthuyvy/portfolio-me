import Image from 'next/image';
import Link from 'next/link';

// ----------------------------------------------------------------------

export default function Header() {
  return (
    <header className="absolute z-[100] w-full h-[60px]">
      <div className="container flex py-[14px] items-center justify-between min2md:justify-start gap-auto min2md:gap-[262px]">
        <Link href={'#'} target="_blank">
          <Image
            className="h-auto"
            src="/images/ttv-logo.webp"
            alt="ttv logo"
            priority
            width={100}
            height={32}
          />
        </Link>
        <nav>
          <ul className="flex gap-2 minmd:gap-[23px]">
            <li>
              <Link
                className="inline-block text-[#000] py-2 px-4 minmd:py-[10px] minmd:px-[20px] font-normal leading-[21px] tracing-[-0.28px] text-[14px] cursor-pointer"
                href={'#'}
                target="_blank"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                className="inline-block text-[#000] py-2 px-4 minmd:py-[10px] minmd:px-[20px] font-normal leading-[21px] tracing-[-0.28px] text-[14px] cursor-pointer"
                href={'#'}
                target="_blank"
              >
                Blogs
              </Link>
            </li>
            <li className="hidden min2sm:inline-block">
              <Link
                className="inline-block text-[#000] py-2 px-4 minmd:py-[10px] minmd:px-[20px] font-normal leading-[21px] tracing-[-0.28px] text-[14px] cursor-pointer"
                href={'#'}
                target="_blank"
              >
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
