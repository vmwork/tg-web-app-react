export function Api() {
  const TELEGRAM_BOT_TOKEN = "7346201764:AAEHwMHDxpz1HrbBhuGS1gtQ47ACv9Q_31c";
  const TELEGRAM_CHAT_ID = "@testerRGBBotGROUPE";
  const APIMessage = `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`;
  const APIPhoto = `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendPhoto`;
  const APILocation = `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendLocation`;

  return {
    TELEGRAM_BOT_TOKEN,
    TELEGRAM_CHAT_ID,
    APIMessage,
    APIPhoto,
    APILocation,
  };
}
