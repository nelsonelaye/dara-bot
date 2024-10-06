import React from "react";
import { FiSidebar } from "react-icons/fi";
import { twMerge } from "tailwind-merge";

const Header = ({
  open,
  setOpen,
}: {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  return (
    <header className="w-full min-h-[60px] flex items-center  top-0 right-0 left-0  py-6 px-6">
      <FiSidebar
        className={twMerge(open && "hidden", "cursor-pointer")}
        color="black"
        fontSize={24}
        onClick={() => {
          setOpen(!open);
        }}
      />
    </header>
  );
};

export default Header;
