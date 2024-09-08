import { axiosBaseInstance } from "@/lib/axios-base";

export const promptChat = async (text: string) => {
  try {
    const res = await axiosBaseInstance.post("/chat", { text });
    return res;
  } catch (err) {
    return err;
  }
};
