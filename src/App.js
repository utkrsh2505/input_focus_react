import "./styles.css";
import { useRef } from "react";

export default function App() {
  const inputRef = useRef(null);
  const handleFocus = () => {
    inputRef.current.focus();
  };
  return (
    <div className="App">
      <input ref={inputRef} type="text" placeholder="type something" />
      <button onClick={handleFocus}>Focus</button>
    </div>
  );
}
