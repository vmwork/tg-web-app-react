import { Api } from "./api/api";
import { useState } from "react";

export function useSendLocation(data) {
  const { TELEGRAM_BOT_TOKEN, TELEGRAM_CHAT_ID, APILocation } = Api();
  const [location, setLocation] = useState({ latitude: "", longitude: "" });
  const getLocation = () => {
    navigator.geolocation.getCurrentPosition(function (position) {
      setLocation({
        latitude: position.coords.latitude,
        longitude: position.coords.longitude,
      });
    });
  };

  const sendLocation = async () => {
    try {
      await getLocation();
      console.log(location);
      const response = await fetch(APILocation, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          chat_id: TELEGRAM_CHAT_ID,
          latitude: location.latitude,
          longitude: location.longitude,
        }),
      });
    } catch (error) {
      console.error(error);
    }
  };
  return {
    sendLocation,
  };
}
