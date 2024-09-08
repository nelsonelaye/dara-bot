"use client";
import Image from "next/image";
import React, { useState } from "react";
import { GoArrowRight } from "react-icons/go";
import openaiOutline from "@/assets/images/openai-outline.png";
import { useMutation } from "@tanstack/react-query";
import { promptChat } from "@/api";
const ChatInput = () => {
  const [text, setText] = useState("");
  const { mutate } = useMutation({
    mutationFn: promptChat,
    onSuccess: (res) => {
      console.log(res);
    },
  });

  return (
    <div className="w-full min-h-[60px]  mx-auto flex items-center bg-white  text-black-100 rounded-[10px] px-4">
      <Image src={openaiOutline} alt="Open AI logo" width={30} height={30} />
      <input
        type="text"
        className="w-full h-full px-3 outline-none border-0 bg-transparent font-medium"
        value={text}
        onChange={(e) => {
          setText(e.target.value);
        }}
      />
      <button
        className="bg-green-100 rounded-lg p-3 cursor-pointer"
        onClick={() => {
          mutate(text);
        }}
      >
        <GoArrowRight color="white" fontSize={20} />
      </button>
    </div>
  );
};

export default ChatInput;
