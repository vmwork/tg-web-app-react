import { Api } from "./api/api";
import { useEffect, useState } from "react";

export function useSendLocation(data) {
  const { TELEGRAM_BOT_TOKEN, TELEGRAM_CHAT_ID, APILocation } = Api();
  const [location, setLocation] = useState({ latitude: "", longitude: "" });
  const getLocation = () => {
    navigator.geolocation.getCurrentPosition(function (position) {
      console.log(position.coords.latitude, position.coords.longitude);
      setLocation({
        latitude: position.coords.latitude,
        longitude: position.coords.longitude,
      });
    });
  };
  useEffect(() => {
    getLocation();
  }, []);
  const sendLocation = async () => {
    try {
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
