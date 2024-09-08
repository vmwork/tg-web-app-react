import { Api } from "./api/api";

export function useSendMessage() {
  const { TELEGRAM_BOT_TOKEN, TELEGRAM_CHAT_ID, APIMessage } = Api();
  const sendMessage = async (user) => {
    try {
      const response = await fetch(APIMessage, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          chat_id: TELEGRAM_CHAT_ID,
          text: `${user}, просит помощи, напали сотрудники ТЦК`,
        }),
      });
    } catch (error) {
      console.error(error);
    }
  };
  return {
    sendMessage,
  };
}
