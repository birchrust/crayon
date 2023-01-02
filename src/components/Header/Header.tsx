import * as React from "react";
import Image from "next/image";
import Search from "../Search.tsx/Search";
import Link from "next/link";

import { BsGithub } from "react-icons/bs";

type HeaderProps = {
  children?: React.ReactNode;
};

const Header: React.FC<HeaderProps> = () => {
  return (
    <header className="sticky top-0 z-40 mx-auto w-full flex-none bg-white shadow">
      <div className="mx-auto w-full max-w-8xl py-2 px-3 lg:flex lg:justify-between lg:px-3">
        <div className="flex items-center gap-2">
          <div className="halloween:bg-red-200 relative h-12 w-12 rounded bg-white">
            <Image alt="logo" fill src={"/logo.svg"} className="p-2" />
          </div>
          <Search></Search>
        </div>
        <div className="flex items-center">
          <Link
            href={"/"}
            className="mr-1  hidden rounded-lg p-2.5 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-700 sm:inline-block"
          >
            <BsGithub className="h-6 w-6" />
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
