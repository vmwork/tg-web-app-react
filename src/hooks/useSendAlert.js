import { useSendMessage } from "./useSendMessage";
import { useSendPhoto } from "./useSendPhoto";
import { useSendLocation } from "./useSendLocation";
export function useSendAlert(data) {
  const { sendMessage } = useSendMessage();
  const { sendPhoto } = useSendPhoto();
  const { sendLocation } = useSendLocation();
  const sendAlert = async () => {
    sendPhoto();
    sendMessage();
    sendLocation();
  };
  return {
    sendAlert,
  };
}
