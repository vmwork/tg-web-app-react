import { useTelegram } from "./useTelegram";

const TELEGRAM_BOT_TOKEN = "7346201764:AAEHwMHDxpz1HrbBhuGS1gtQ47ACv9Q_31c";
const TELEGRAM_CHAT_ID = "@testerRGBBotGROUPE";
const API = `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`;

export function useSendMessage(data) {
  const { user, tg } = useTelegram();

  const sendAlert = async () => {
    console.log(user);
    try {
      const response = await fetch(API, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          chat_id: TELEGRAM_CHAT_ID,
          text: "text",
        }),
      });
    } catch (error) {
      console.error(error);
    }
  };
  return {
    sendAlert,
  };
}
