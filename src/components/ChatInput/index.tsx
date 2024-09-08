"use client";
import Image from "next/image";
import React, { useState } from "react";
import { GoArrowRight } from "react-icons/go";
import openaiOutline from "@/assets/images/openai-outline.png";
import { useMutation } from "@tanstack/react-query";
import { promptChat } from "@/api";
import { useDispatch } from "react-redux";
import { updateChatHistory } from "@/store/slice/chatSlice";

const ChatInput = () => {
  const dispatch = useDispatch();

  const [text, setText] = useState("");

  const saveChat = (role: string, content: string) => {
    dispatch(updateChatHistory({ role: role, content: content }));
  };

  const { mutate } = useMutation({
    mutationFn: promptChat,
    onSuccess: (res) => {
      saveChat("dara", res.message);
      setText("");
    },
  });

  const handleChat = () => {
    mutate(text);
    saveChat("user", text);
  };

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
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            handleChat();
          }
        }}
      />
      <button
        className="bg-green-100 rounded-lg p-3 cursor-pointer"
        onClick={handleChat}
      >
        <GoArrowRight color="white" fontSize={20} />
      </button>
    </div>
  );
};

export default ChatInput;
