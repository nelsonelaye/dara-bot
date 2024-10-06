import { chatInterface } from "@/types/component";
import Image from "next/image";
import React from "react";
import openai from "@/assets/images/openai.png";

const ChatContent = ({ role, content }: chatInterface) => {
  return (
    <div className="w-full mb-10">
      <div className="flex  gap-3 mb-3">
        {role === "user" ? (
          <div className="w-[30px] h-[30px] rounded-full bg-black-60"></div>
        ) : (
          <Image
            src={openai}
            alt="brand logo"
            width={30}
            height={30}
            className="w-[30px] h-[30px] rounded-full"
          />
        )}

        <div className="w-fit">
          {/* <h4 className="mb-3">{role == "user" ? "You" : "Dara"}</h4> */}
          <p className="leading-7">{content}</p>
        </div>
      </div>
    </div>
  );
};

export default ChatContent;
