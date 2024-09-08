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
  const getLocation = () => {
    navigator.geolocation.getCurrentPosition(function (position) {
      console.log(position.coords.latitude, position.coords.longitude);
    });
  };
  useEffect(() => {
    getLocation();
  }, []);
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
