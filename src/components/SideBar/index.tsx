import Image from "next/image";
import React from "react";
import openai from "@/assets/images/openai.png";
const SideBar = () => {
  return (
    <section className="w-full h-screen bg-black-70 pt-4 p-5">
      <div className="flex items-center gap-3">
        <Image src={openai} alt="brand logo" width={40} height={40} />
        <h1 className="text-xl font-medium">Dara</h1>
      </div>
    </section>
  );
};

export default SideBar;
