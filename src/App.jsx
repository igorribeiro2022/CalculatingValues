import { useState } from "react";
import InputInfo from "./components/inputs";
import OutputInfo from "./components/outputs";
import { AppDiv, Status } from "./styles/styleApp";

function App() {
  const [ isOnline, setIsOnline ] = useState(navigator.onLine)
  const initialStatus = isOnline === true ? "online" : "offline"
  const [ status, setStatus ] = useState(initialStatus)

  window.addEventListener("offline", (e) => {
    setIsOnline(false)
    setStatus("offline")
  });

  window.addEventListener("online", (e) => {
    setIsOnline(true)
    setStatus("online")
  });

  return (
    <AppDiv>
      <div className="title">
        <h1>Simule sua Antecipação</h1>
        <Status isOnline={isOnline}>{status}</Status>
      </div>
      <div>
        <InputInfo />
        <OutputInfo />
      </div>
    </AppDiv>
  );
}

export default App;
