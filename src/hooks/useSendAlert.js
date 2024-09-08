import { useSendMessage } from "./useSendMessage";
import { useSendPhoto } from "./useSendPhoto";
import { useSendLocation } from "./useSendLocation";
export function useSendAlert() {
  const { sendMessage } = useSendMessage();
  const { sendPhoto } = useSendPhoto();
  const { sendLocation } = useSendLocation();
  const sendAlert = async (user) => {
    await sendPhoto();
    await sendMessage(user);
    await sendLocation();
  };
  return {
    sendAlert,
  };
}
