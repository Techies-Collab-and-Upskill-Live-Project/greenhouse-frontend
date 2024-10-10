import Image from "next/image";
import React from "react";
import Link from "next/link";

export default function Logo() {
  return (
    <div className="h-[38px] w-[108px]">
      <Link href="/">
        <Image
          height={100}
          width={100}
          className="h-full w-full object-contain"
          src="/images/Logo.png"
          alt="logo"
        />
      </Link>
    </div>
  );
}
