import { ReactNode } from "react";
import { IconType } from "react-icons";

export interface chatLayoutInterface {
  children: ReactNode;
}

export interface cardInterface {
  Icon: IconType;
  title: string;
  description: string;
}

export interface chatInterface {
  role: "user" | "bot";
  content: string;
}
