import { createSignal } from "solid-js";
import "./App.scss";
import Child from "./child";

function App() {
  const [isDark, setIsDark] = createSignal(false);

  return (
    <div>
      <Child id={10} isDark={isDark()} />

      <button onClick={() => setIsDark((pre) => !pre)}>Switch</button>
    </div>
  );
}

export default App;
