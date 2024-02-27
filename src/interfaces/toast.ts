import { ToastShowParams } from "react-native-toast-message";

export interface IToast extends ToastShowParams {
  type?: "success" | "error";
  message?: string;
  subText?: string;
  visible: boolean;
}
