import { cardInterface } from "@/types/component";
import React from "react";

const Card = ({ Icon, title, description }: cardInterface) => {
  return (
    <div className="w-full rounded-[12px] bg-black-60 px-3 pt-10 pb-5 flex flex-col items-center justify-center gap-3">
      <Icon className="text-green-100" fontSize={24} />
      <h3 className="text-2xl">{title}</h3>
      <p className="text-sm">{description}</p>
    </div>
  );
};

export default Card;
