import Image from "next/image";
import React from "react";
import logo from "@/assets/images/abstract.png";
import { FiSidebar } from "react-icons/fi";
import confetti from "@/assets/images/confetti.png";

const SideBar = ({
  setOpen,
}: {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  return (
    <section className="w-[70%] h-screen bg-[#ededed]  pt-6 p-5 shadow-md max-md:fixed left-0 top-0 z-10  sm:w-64  md:!block">
      <div className="flex items-center gap-3 mb-8">
        <Image src={logo} alt="brand logo" width={40} height={40} />
        <h1 className="text-xl font-semibold">Dara</h1>
        <FiSidebar
          color="black"
          fontSize={24}
          className="ml-auto cursor-pointer"
          onClick={() => {
            setOpen(false);
          }}
        />
      </div>

      <div>
        <h3 className="flex items-center leading-6 mb-2 ">
          Welcome to <span className="font-semibold ml-1"> Dara!</span>
          <Image
            src={confetti}
            alt="confetti"
            width={20}
            height={20}
            className="ml-2"
          />
        </h3>
        <p className="text-sm ">
          A conversational AI Chatbot built on{" "}
          <a
            href="https://huggingface.co/meta-llama/Meta-Llama-3-8B-Instruct"
            target="_blank"
            className="underline"
          >
            Meta Llama-3
          </a>{" "}
          ML model
        </p>
      </div>
    </section>
  );
};

export default SideBar;
