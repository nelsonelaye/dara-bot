"use client";
import Card from "@/components/Card";
import ChatContent from "@/components/ChatContent";
import ChatInput from "@/components/ChatInput";
import ChatLayout from "@/layout/ChatLayout";
import { RootState } from "@/store";
import { FaMoneyCheck } from "react-icons/fa";
import { useSelector } from "react-redux";

export default function Home() {
  const history = useSelector((state: RootState) => state.chat.history);
  console.log(history);
  return (
    <ChatLayout>
      {history.length > 0 ? (
        <div className="w-[70%] mx-auto h-[85vh] flex flex-col justify-between items-center  overflow-hidden  pt-5 ">
          <div className="overflow-y-scroll box-content">
            {history.map(({ role, content }, index) => (
              <ChatContent key={index} role={role} content={content} />
            ))}
          </div>
          <ChatInput />
        </div>
      ) : (
        <div className="w-[70%] mx-auto h-fit bg-black-70 rounded-[10px] mt-28 p-5 pt-10 text-center">
          <h1 className="text-4xl">How can I help you today?</h1>
          <p className="text-black-60">
            Ask anything about personal finance, budgeting, and investing in
            Nigeria
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
          <ChatInput />
        </div>
      )}
    </ChatLayout>
  );
}
