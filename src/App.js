import "./App.css";
import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather />
        <p>
          Created by Viktoriia Perehuda,{" "}
          <a
            href="https://github.com/tourdesegur/app-react-week5"
            target="_blank"
            rel="noreferrer"
          >
            open-sourced on GitHub
          </a>
        </p>
      </div>
    </div>
  );
}

export default App;
