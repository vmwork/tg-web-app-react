import React from "react";
import { useTelegram } from "../../hooks/useTelegram";

const Header = (props) => {
  const { user, onClose, onToggleButton } = useTelegram();

  return (
    <div className={"header"}>
      <button onClick={onClose}>Закрыть</button>
      <span className={"username"}>{user}</span>
    </div>
  );
};

export default Header;
