import React from "react";
import "./Main.css";
import { useEffect } from "react";
import { useTelegram } from "../../hooks/useTelegram";
import { useSendAlert } from "../../hooks/useSendAlert";
import { useSendMessage } from "../../hooks/useSendMessage";
import Button from "../Button/Button";

const Main = () => {
  const { user } = useTelegram();
  const { sendAlert } = useSendAlert();
  const eventHandler = () => {
    sendAlert(user.first_name);
  };
  return (
    <div className={"main bg-color-main"}>
      <div className="main-wrapper">
        <Button onClick={eventHandler} className={"pizdec"}>
          ТЦК
        </Button>
      </div>
    </div>
  );
};

export default Main;
