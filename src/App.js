import { useEffect } from "react";
import "./App.css";
import { useTelegram } from "./hooks/useTelegram";

function App() {
  const { tg, onClose, onToggleButton } = useTelegram();

  useEffect(() => {
    tg.ready();
  });

  return (
    <div className="App">
      App
      <button onClick={onToggleButton}>Toggle</button>
    </div>
  );
}

export default App;
