import Image from "next/image";
import React from "react";

const Contactimgs = () => {
  return (
    <div className="  md:flex-row flex-col flex relative gap-[200px] md:gap-4  py-24">
      <div className="flex  gap-4 sm:gap-6  ">
        <div>
          <Image
            width={350}
            height={300}
            quality={100}
            priority={true}
            src="/images/contact1.png"
            alt="contact"
            className="rounded-lg"
          />
        </div>
        <div className="translate-y-1/2 ">
          <Image
            priority={true}
            width={350}
            height={300}
            quality={100}
            src="/images/contact2.png"
            alt="contact"
            className="rounded-lg"
          />
        </div>
      </div>
      <div className="flex gap-4 sm:gap-6  ">
        {" "}
        <div>
          <Image
            width={350}
            height={300}
            priority={true}
            quality={100}
            src="/images/contact3.png"
            alt="contact"
            className="rounded-lg"
          />
          <div className="icons">
            <Image
              src="/images/facebook.png"
              alt="facebook"
              width={30}
              height={30}
            />
          </div>
        </div>
        <div className="   translate-y-1/2 ">
          <Image
            width={350}
            height={300}
            quality={100}
            priority={true}
            src="/images/contact4.png"
            alt="contact"
            className="rounded-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default Contactimgs;
