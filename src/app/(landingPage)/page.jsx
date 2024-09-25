import Button from "@/components/ui/Button";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="">
      Landing Page
      <Link href="/about">Go to about</Link>
      <div className="my-20">
        <Button loading={false} css="w-96">
          <span>icon</span>
          <span>Submit</span>
        </Button>
      </div>
    </div>
  );
}
