import React from "react";
import "./Main.css";

import { useTelegram } from "../../hooks/useTelegram";
import Button from "../Button/Button";
const Main = () => {
  const { user } = useTelegram();

  return (
    <div className={"main bg-color-main"}>
      <div className="main-wrapper">
        <Button className={"need_help"}>Fight</Button>
        <Button className={"pizdec"}>ТЦК</Button>
      </div>
    </div>
  );
};

export default Main;
