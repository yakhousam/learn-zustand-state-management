import "./App.css";
import { CounterButtons } from "./components/CounterButtons";
import { CounterDispaly } from "./components/CounterDisplay";

function App() {
  return (
    <div className='App'>
      <CounterDispaly />
      <CounterButtons />
    </div>
  );
}

export default App;
