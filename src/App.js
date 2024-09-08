import "./App.css";
import { useEffect } from "react";
import { useTelegram } from "./hooks/useTelegram";
import eruda from "eruda";
import Header from "./components/Header/Header";
import { Route, Routes } from "react-router-dom";
import Main from "./components/Main/Main";
function App() {
  const { tg, onClose, onToggleButton } = useTelegram();
  eruda.init();
  useEffect(() => {
    tg.ready();
  });

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route index element={<Main />} />
      </Routes>
    </div>
  );
}

export default App;
