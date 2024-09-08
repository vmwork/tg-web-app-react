import { Api } from "./api/api";

export function useSendMessage(data) {
  // const { user } = useTelegram();
  const { TELEGRAM_BOT_TOKEN, TELEGRAM_CHAT_ID, APIMessage } = Api();
  const sendMessage = async () => {
    try {
      const response = await fetch(APIMessage, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          chat_id: TELEGRAM_CHAT_ID,
          text: `${user.first_name}, просит помощи, напали сотрудники ТЦК`,
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
