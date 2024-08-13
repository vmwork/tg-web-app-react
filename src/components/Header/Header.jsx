import React from "react";
import Button from "../Button/button";

const Header = (props) => {
  const tg = window.Telegram.WebApp;

  const onClose = () => {
    tg.close();
  };

  return (
    <div className={"header"}>
      <Button onClick={OnClose}>Закрыть</Button>
      <span className={"username"}>{tg.initDataUnsafe?.user?.userName}</span>
    </div>
  );
};

export default Header;
