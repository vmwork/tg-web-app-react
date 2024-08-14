import React from "react";
import { useTelegram } from "../../hooks/useTelegram";

const Main = () => {
  const { user } = useTelegram();

  return (
    <div className={"main"}>
      <span className={"main-user"}>{user?.username}</span>
    </div>
  );
};

export default Main;
