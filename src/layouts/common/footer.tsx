'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

import styles from './footer-styles.module.scss';
import { SVGEmail, SVGFacebook, SVGPhone } from '@/assets/svgs';

// ----------------------------------------------------------------------

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <>
      <footer className="py-[30px] bg-[#F7F8F9]">
        <div className="container flex flex-col gap-8 minmd:flex-row minmd:items-center minmd:justify-between minlg:px-10">
          <div className="minmd:flex-1">
            <div className="flex items-center gap-5 mb-4">
              <Link href={'/'} target="_blank">
                <Image
                  className="inline-block"
                  src={'/images/ttv-logo.webp'}
                  alt="ttv logo"
                  width={120}
                  height={37}
                />
              </Link>
              <span className="inline-block text-[14px] text-[#000] font-normal leading-[27px]">
                Frontend Developer
              </span>
            </div>
            <span className="text-[14px] text-[#000] font-light leading-[27px] -trancking-[0.24px]">
              © {year} - TTV. All rights reserved.
            </span>
          </div>
          <div>
            <address className="minmd:text-right text-[#000] text-[14px] not-italic leading-[160%] -tracking-[0.24px]">
              <span>TTV - Frontend Developer</span> <br />
              <span>TP.HCM</span> <br />
              <span className="font-semibold">
                Hotline: <a href="tel:0373162586">0373162586</a>
              </span>
            </address>
            <div className="mt-4 flex gap-3 justify-start minmd:justify-end">
              <a className="inline-block" href="#">
                <SVGEmail />
              </a>
              <a className="inline-block" href="#">
                <SVGFacebook />
              </a>
            </div>
          </div>
        </div>
      </footer>

      <ul className="fixed z-[1000] right-2 minmd:right-4 bottom-[30%] flex gap-[12px] flex-col">
        <li className={`relative inline-block ${styles.zalo}`}>
          <Link
            className="[border:1px_solid_#38d9db] flex justify-center items-center rounded-full bg-white h-10 w-10 hover:opacity-90 transition-opacity"
            target="_blank"
            href="#"
          >
            <Image
              className="w-[30px] h-[30px]"
              src="/icons/zalo.png"
              alt="lien he qua zalo"
              width={50}
              height={50}
              priority
            />
          </Link>
        </li>
        <li className={`relative inline-block ${styles.messenger}`}>
          <Link
            className="bg-[#0052c2] h-10 w-10 flex justify-center items-center rounded-full hover:opacity-90 transition-opacity"
            target="_blank"
            href="#"
          >
            <Image
              className="w-[30px] h-[30px]"
              src="/icons/messenger.png"
              alt="lien he qua messenger"
              width={50}
              height={50}
              priority
            />
          </Link>
        </li>
        <li className={`relative inline-block ${styles.phone}`}>
          <Link
            className="w-10 h-10 rounded-full bg-[#6db703] flex justify-center items-center hover:opacity-90 transition-opacity"
            href="tel:0373162586"
            target="_blank"
          >
            <span className="w-1/2 h-1/2">
              <SVGPhone />
            </span>
          </Link>
        </li>
      </ul>
    </>
  );
}
