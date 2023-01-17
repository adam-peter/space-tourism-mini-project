import React from "react";
import Image from 'next/image'
import Link from 'next/link'

const Header = () => {
  return (
    <header className="flex">
      <Image src="/images/logo.svg" alt="logo" width="32" height="32"></Image>
      <Link href="#">00 HOME</Link>
      <Link href="#">01 DESTIONATION</Link>
      <Link href="#">02 CREW</Link>
      <Link href="#">03 TECHNOLOGY</Link>
    </header>
  );
};

export default Header;
