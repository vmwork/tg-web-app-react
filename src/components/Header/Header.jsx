import React from "react";
import Button from "../Button/button";
import { useTelegram } from "../../hooks/useTelegram";

const Header = (props) => {
  const { user, onClose, onToggleButton } = useTelegram();

  return (
    <div className={"header"}>
      <Button onClick={OnClose}>Закрыть</Button>
      <span className={"username"}>{user}</span>
    </div>
  );
};

export default Header;
