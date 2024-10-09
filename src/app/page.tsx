"use client";
import Card from "@/components/Card";
import ChatContent from "@/components/ChatContent";
import ChatInput from "@/components/ChatInput";
import ChatLayout from "@/layout/ChatLayout";
import { RootState } from "@/store";
import { useEffect, useRef, useState } from "react";
import { FaMoneyCheck } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import logo from "@/assets/images/abstract.png";
import Image from "next/image";
import Skeleton from "react-loading-skeleton";
import {
  mutateChatLoadingState,
  updateChatHistory,
} from "@/store/slice/chatSlice";
import { useMutation } from "@tanstack/react-query";
import { promptChat } from "@/api";
import { IoMdAlert } from "react-icons/io";
// import Replicate from "replicate";

export default function Home() {
  // const replicate = new Replicate();
  const history = useSelector((state: RootState) => state.chat.history);
  const bottomRef = useRef<HTMLDivElement | null>(null);

  const dispatch = useDispatch();
  const [query, setQuery] = useState("");

  const saveChat = (role: string, content: string) => {
    dispatch(updateChatHistory({ role: role, content: content }));
  };

  const { mutate, isPending, isError, error } = useMutation({
    mutationKey: ["chat"],
    mutationFn: promptChat,
    onSuccess: (res) => {
      // console.log(res);
      saveChat("dara", res.result.response);
    },
    onSettled: () => {
      dispatch(mutateChatLoadingState(false));
    },
  });

  const handleChat = async () => {
    mutate(query);

    saveChat("user", query);

    setQuery("");
    dispatch(mutateChatLoadingState(true));
  };

  useEffect(() => {
    if (bottomRef.current) {
      bottomRef.current.scrollTop = bottomRef.current.scrollHeight;
    }
  }, [history]);
  return (
    <ChatLayout>
      <div className="w-full relative  md:w-[65%] max-w-[640px] mx-auto">
        {history.length > 0 ? (
          <div className="h-[85vh] flex flex-col justify-between  overflow-hidden  pt-5 pb-20">
            <div
              ref={bottomRef}
              className="overflow-y-scroll box-content max-h-full"
            >
              {history.map(({ role, content }, index) => (
                <ChatContent
                  key={index}
                  role={role}
                  content={content}
                  isLastIndex={index === history.length - 1 ? true : false}
                />
              ))}

              {isError && (
                <div className="w-full mb-10 flex items-center text-red-600">
                  <IoMdAlert fontSize={20} className="mr-1" />{" "}
                  <p className="">{error.message}</p>
                </div>
              )}
              {isPending && <Skeleton count={5} />}
            </div>
            <div className="absolute w-full bottom-0 left-0">
              <div className="w-[90%] md:w-full  mx-auto">
                <ChatInput
                  value={query}
                  SetValue={setQuery}
                  onSubmit={handleChat}
                />
              </div>
            </div>
          </div>
        ) : (
          <div>
            <div className="w-full mx-auto h-[90vh] md:h-[80vh] flex flex-col items-center justify-between  ">
              <div className="w-full flex-1  flex flex-col items-center justify-center">
                <Image
                  src={logo}
                  width={80}
                  height={80}
                  alt="Dara logo"
                  className="mb-3"
                />
                <h3 className="text-2xl text-center font-medium mb-2">
                  Welcome to Dara
                </h3>
                <p className="text-sm text-black-60 text-center w-[80%]">
                  A conversational AI chatbot built on{" "}
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
              <div className="absolute w-full bottom-5 left-0">
                <div className="w-[100%] max-w-[640px] mx-auto">
                  <ChatInput
                    value={query}
                    SetValue={setQuery}
                    onSubmit={handleChat}
                  />
                </div>
              </div>{" "}
            </div>

            <div className="hidden w-full h-screen   items-center justify-center">
              <div className="w-full h-fit bg-black-70 rounded-[10px]  p-5 pt-10 text-center">
                <h1 className="text-4xl">How can I help you today?</h1>
                <p className="text-black-60">
                  Ask anything about personal finance, budgeting, and investing
                  in Nigeria
                </p>

                <div className="flex items-center gap-3 my-10">
                  <Card
                    Icon={FaMoneyCheck}
                    title="Financial base"
                    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec id hendrerit odio."
                  />
                  <Card
                    Icon={FaMoneyCheck}
                    title="Finance"
                    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec id hendrerit odio."
                  />
                  <Card
                    Icon={FaMoneyCheck}
                    title="Finance"
                    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec id hendrerit odio."
                  />
                </div>
                <ChatInput
                  value={query}
                  SetValue={setQuery}
                  onSubmit={handleChat}
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </ChatLayout>
  );
}
