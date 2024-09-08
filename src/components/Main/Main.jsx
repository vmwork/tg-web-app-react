import React from "react";
import "./Main.css";
import { useTelegram } from "../../hooks/useTelegram";
import Button from "../Button/Button";

const TELEGRAM_BOT_TOKEN = "7346201764:AAEHwMHDxpz1HrbBhuGS1gtQ47ACv9Q_31c";
const TELEGRAM_CHAT_ID = "@testerRGBBotGROUPE";
const API = `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`;

const Main = () => {
  const { user } = useTelegram();
  const sendAlert = async () => {
    console.log("alert");
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

  return (
    <div className={"main bg-color-main"}>
      <div className="main-wrapper">
        <Button onClick={sendAlert} className={"pizdec"}>
          ТЦК
        </Button>
      </div>
    </div>
  );
};

export default Main;
