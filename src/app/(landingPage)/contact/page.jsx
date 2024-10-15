import Image from "next/image";
import React from "react";
import { FaFacebook } from "react-icons/fa";
import { SlSocialInstagram } from "react-icons/sl";
import { CiLinkedin } from "react-icons/ci";

const ContactPage = () => {
  return (
    <div className="container mx-auto px-4">
      {/* Contact Header Section */}
      <div className="flex md:flex-row flex-col-reverse items-start justify-between pt-56 pb-24">
        <div className="text">
          <h3 className="font-bold text-[23px] pb-2 sm:text-[27px]">
            Our Contacts
          </h3>
          <div className="font-[500] text-[19px]">Working hours:</div>
          <div className="text-[15px]">24hrs Mon - Sun</div>
          <div className="font-[500] text-[19px]">Email:</div>
          <div className="text-[15px]">Fysi@gmail.com</div>
          <div className="font-[500] text-[19px]">Phone Number:</div>
          <div className="text-[15px]">+2348100000000</div>
        </div>
        <Image
          src="/images/Eco-friendly.png"
          alt="contact"
          quality={100}
          width={750}
          height={600}
          className="rounded-lg"
        />
      </div>

      {/* Contact Images Section */}
      <h1 className="font-medium text-3xl">Welcome us on Social media</h1>
      <div className="md:flex-row flex-col flex relative gap-[200px] md:gap-4 py-24">
        <div className="flex gap-4 sm:gap-6">
          <div>
            <Image
              width={350}
              height={300}
              quality={100}
              priority={true}
              src="/images/letterhead.png"
              alt="contact"
              className="rounded-lg"
            />
          </div>
          <div className="translate-y-1/2">
            <Image
              priority={true}
              width={350}
              height={300}
              quality={100}
              src="/images/perfume.png"
              alt="contact"
              className="rounded-lg"
            />
          </div>
        </div>
        <div className="flex gap-4 sm:gap-6">
          <div>
            <Image
              width={350}
              height={300}
              priority={true}
              quality={100}
              src="/images/bamboo.png"
              alt="contact"
              className="rounded-lg"
            />
            <div className="icons">
              {/* <Image
                src="/images/facebook.png"
                alt="facebook"
                width={30}
                height={30}
              /> */}
              <div className="flex items-center justify-start gap-1">
                <FaFacebook />
                <span>@fysi</span>
              </div>
              <div className="flex items-center justify-start gap-1">
                <SlSocialInstagram />
                <span>@fysi.com</span>
              </div>
              <div className="flex items-center justify-start gap-1">
                <CiLinkedin />
                <span>@fysi.com</span>
              </div>
            </div>
          </div>
          <div className="translate-y-1/2">
            <Image
              width={350}
              height={300}
              quality={100}
              priority={true}
              src="/images/lamp.png"
              alt="contact"
              className="rounded-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
