import PageLoader from "@/components/ui/PageLoader";
import React from "react";
import TextImg from "@/components/landingPage/about/textImg";
import Reviews from "@/components/landingPage/reviews/reviews";

export default function Page() {
  return (
    <>
      <div className="max-w-[1200px] mx-auto  px-12">
        <div className="mb-20">
          <TextImg
            title="About Us"
            style=" lg:flex-row flex-col pt-56"
            text="Welcome to Fysi, your go-to marketplace for eco-friendly products that help you live a more sustainable lifestyle. At Fysi, we believe in the power of nature and the importance of making conscious choices that benefit both you and the planet."
            img="/images/aboutpic1.png"
          />

          <TextImg
            title="Our Mission"
            style=" lg:flex-row-reverse flex-col"
            text="We are committed to connecting eco-conscious customers with vendors who share our passion for sustainability. Our mission is to make it easy for you to find and purchase products that are not only good for you but also good for the environment. Every item on our platform is carefully vetted and certified to meet our high standards of eco-friendliness."
            img="/images/aboutpic2.png"
          />

          <TextImg
            title="Our Vendors"
            style=" lg:flex-row flex-col"
            text="We partner with a diverse range of vendors who are dedicated to creating high-quality, sustainable products. From organic cotton clothing to handcrafted bamboo items, our vendors are at the forefront of the green movement. They are passionate about what they do, and we are proud to support them in their mission to make a positive impact on the world."
            img="/images/aboutpic3.png"
          />

          <TextImg
            title="Eco-Certification"
            style=" lg:flex-row-reverse flex-col"
            text="At Fysi, we take sustainability seriously. That&Apo;ss why we have developed a rigorous eco-certification process to ensure that every product on our platform meets our strict criteria for environmental responsibility. When you shop with us, you can trust that you are making a choice that aligns with your values."
            img="/images/aboutpic4.png"
          />

          <TextImg
            title="Why Fysi?"
            style=" lg:flex-row  flex-col "
            l1="Sustainability: Every product is eco-certified, ensuring you make responsible choices."
            l2="Quality: Our vendors are selected for their commitment to high standards and sustainable practices."
            l3="Convenience: Shop from a wide range of eco-friendly products, all in one place."
            img="/images/aboutpic5.png"
          />
        </div>
        <div>
          <Reviews />
        </div>
      </div>
    </>
  );
}
