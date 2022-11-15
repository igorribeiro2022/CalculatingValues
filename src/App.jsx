import InputInfo from "./components/inputs";
import OutputInfo from "./components/outputs";
import { AppDiv } from "./styles/styleApp";

function App() {
  return (
    <AppDiv>
      <h1>Simule sua Antecipação</h1>
      <div>
        <InputInfo/>
        <OutputInfo/>
      </div>
    </AppDiv>
  );
}

export default App;
