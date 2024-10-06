import Header from "@/components/Header";
import SideBar from "@/components/SideBar";
import { chatLayoutInterface } from "@/types/component";
import React, { useEffect, useState } from "react";
import styles from "@/styles/layout.module.css";
import { twMerge } from "tailwind-merge";
import { useTheme } from "next-themes";

const ChatLayout = ({ children }: chatLayoutInterface) => {
  const [openSideBar, setOpenSideBar] = useState(false);
  const { setTheme } = useTheme();

  useEffect(() => {
    if (window.innerWidth >= 1024) {
      setOpenSideBar(true);
    } else {
      setOpenSideBar(false);
    }
  }, []);

  useEffect(() => {
    setTheme("dark");
  }, []);
  return (
    <div className={twMerge(styles["layout_container"], "")}>
      {openSideBar ? (
        <SideBar open={openSideBar} setOpen={setOpenSideBar} />
      ) : (
        <div></div>
      )}

      <div className="w-full !relative">
        <Header open={openSideBar} setOpen={setOpenSideBar} />
        <section className="w-full p-5">{children}</section>
      </div>
    </div>
  );
};

export default ChatLayout;
