import React from "react";
import "./Main.css";
import { useTelegram } from "../../hooks/useTelegram";
import { useSendMessage } from "../../hooks/useSendMessage";
import Button from "../Button/Button";

const Main = () => {
  const { user } = useTelegram();
  const { sendAlert } = useSendMessage();
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
