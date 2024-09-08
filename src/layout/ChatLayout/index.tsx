import Header from "@/components/Header";
import SideBar from "@/components/SideBar";
import { chatLayoutInterface } from "@/types/component";
import React from "react";
import styles from "@/styles/layout.module.css";

const ChatLayout = ({ children }: chatLayoutInterface) => {
  return (
    <div className={styles["layout_container"]}>
      <SideBar />
      <div className="w-full relative">
        <Header />
        <section className="w-full p-5 relative">{children}</section>
      </div>
    </div>
  );
};

export default ChatLayout;
