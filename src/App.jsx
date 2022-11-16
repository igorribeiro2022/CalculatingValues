import { useContext } from "react";
import InputInfo from "./components/inputs";
import Loader from "./components/loader";
import OutputInfo from "./components/outputs";
import { LoaderContext } from "./providers/loader";
import { StatusContext } from "./providers/networkStatus";
import { AppDiv, Status } from "./styles/styleApp";

function App() {
  const { status, isOnline } = useContext(StatusContext);
  const { isLoading } = useContext(LoaderContext);

  if (isLoading === true) {
    return <Loader />;
  } else {
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
}

export default App;
