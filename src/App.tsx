import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";


function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Hello Vite + React!</p>

        <p>
          <button
            className=""
            type="button"
            onClick={() => setCount((count) => count + 1)}
          >
            count is: {count}
          </button>
          <h1 className="font-light text-2xl text-red">React and tailwind</h1>
        </p>
        <button className="bg-main-purple border-red-hover flex rounded-lg my-3 p-2">
          Hello world
        </button>
        <p>
          Edit... <code>App.tsx</code> and save to test HMR updates.
        </p>
        <p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          {" | "}
          <a
            className="App-link"
            href="https://vitejs.dev/guide/features.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            Vite Docs
          </a>
        </p>
      </header>
    </div>
  );
}

export default App;
