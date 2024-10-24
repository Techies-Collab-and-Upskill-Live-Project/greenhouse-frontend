import Faqs from "@/components/landingPage/faqs/faqs";
import NewsLetter from "@/components/landingPage/newsletter/letter";

export default function Page() {
  return (
    <>
      <div className=" max-w-[1200px] mx-auto  px-12">
        <Faqs />
      </div>
      <NewsLetter />
    </>
  );
}
