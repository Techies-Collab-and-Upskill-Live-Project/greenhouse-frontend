import React from "react";
import Logo from "./ui/Logo";

export default function Header() {
  return (
    <header>
      <div className=" bg-forest-green-500">
        <div className="container mx-auto">
          <div>1</div>
          <div>2</div>
          <div>3</div>
        </div>
      </div>
      <div className="container mx-auto">
        <Logo />
        <div></div>
        <div></div>
      </div>
    </header>
  );
}
