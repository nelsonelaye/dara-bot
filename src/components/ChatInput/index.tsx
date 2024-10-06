"use client";
import Image from "next/image";
import React, { Dispatch, SetStateAction } from "react";
import { GoArrowRight } from "react-icons/go";
import openaiOutline from "@/assets/images/openai-outline.png";

interface props {
  value: string;
  SetValue: Dispatch<SetStateAction<string>>;
  onSubmit: () => void;
}

const ChatInput = ({ onSubmit, value, SetValue }: props) => {
  return (
    <div className="w-full min-h-[60px]  mx-auto flex items-center bg-white  text-black-100 rounded-[10px] px-4">
      <Image src={openaiOutline} alt="Open AI logo" width={30} height={30} />
      <input
        type="text"
        placeholder="Ask me anything"
        className="w-full h-full px-3 outline-none border-0 bg-transparent font-medium"
        value={value}
        onChange={(e) => {
          SetValue(e.target.value);
        }}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            onSubmit();
          }
        }}
      />
      <button
        className="bg-green-100 rounded-lg p-3 cursor-pointer"
        onClick={onSubmit}
      >
        <GoArrowRight color="white" fontSize={20} />
      </button>
    </div>
  );
};

export default ChatInput;
