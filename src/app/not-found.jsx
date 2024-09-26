import Button from "@/components/ui/Button";
import Image from "next/image";
import React from "react";

export default function notfound() {
  return (
    <div className="gap-10 sm:gap-20 h-screen pt-52 flex justifycenter text-center items-center flex-col px-8">
      <h1 className="text-6xl">Oops!</h1>
      <div className="h-40 sm:h-80">
        <Image
          src="/images/404-image.svg"
          height={500}
          width={500}
          className="object-contain w-full h-full"
          alt="404"
        />
      </div>
      <Button css={`bg-forest-green-500 h-[51px] w-[190px]`}>
        Go to Home page{" "}
      </Button>
    </div>
  );
}
