import { Api } from "./api/api";

export function useSendPhoto(data) {
  const { TELEGRAM_BOT_TOKEN, TELEGRAM_CHAT_ID, APIPhoto } = Api();
  const sendPhoto = async () => {
    try {
      const response = await fetch(APIPhoto, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          chat_id: TELEGRAM_CHAT_ID,
          photo: `https://cdn-icons-png.flaticon.com/512/559/559384.png`,
        }),
      });
    } catch (error) {
      console.error(error);
    }
  };
  return {
    sendPhoto,
  };
}
