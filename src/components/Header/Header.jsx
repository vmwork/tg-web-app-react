import React from "react";
import "./Header.css";
import { useTelegram } from "../../hooks/useTelegram";
import Button from "../Button/Button";
const Header = () => {
  const { user, onClose } = useTelegram();

  return (
    <div className={"header bg-color-main"}>
      <div
        className={"user-data flex flex-col items-center justify-items-center	"}
      >
        <img className="user-photo" src="/logo.webp" alt="" />
        <span className={"username"}>{user?.first_name}</span>
      </div>
    </div>
  );
};

export default Header;
