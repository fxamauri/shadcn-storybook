import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { Button } from "./components/ui/button";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center bg-background text-foreground">
      <div className="flex gap-8 mb-8">
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1 className="text-4xl font-bold mb-4">Vite + React</h1>
      <div className="card bg-card p-8 rounded-lg shadow-md flex flex-col items-center">
        <Button className="mb-4" onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </Button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs mt-8">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  );
}

export default App;
