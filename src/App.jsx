import { useContext } from "react";
import InputInfo from "./components/inputs";
import OutputInfo from "./components/outputs";
import { StatusContext } from "./providers/networkStatus";
import { AppDiv, Status } from "./styles/styleApp";

function App() {
  const { status, isOnline } = useContext(StatusContext)

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
