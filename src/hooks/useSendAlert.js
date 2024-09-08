import { useSendMessage } from "./useSendMessage";
import { useSendPhoto } from "./useSendPhoto";

export function useSendAlert(data) {
  const { sendMessage } = useSendMessage();
  const { sendPhoto } = useSendPhoto();
  const sendAlert = async () => {
    sendPhoto();
    sendMessage();
  };
  return {
    sendAlert,
  };
}
