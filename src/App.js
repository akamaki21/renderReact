import { useState } from "react";
import { ChildArea } from "./ChildArea";
import "./styles.css";

export default function App() {
  console.log("App");
  const [text, setText] = useState("input me");

  const onChangeText = (e) => {
    setText(e.target.value);
  };

  return (
    <div className="App">
      <input value={text} onChange={onChangeText} />
      <br />
      <br />
      <button>表示</button>
      <ChildArea />
    </div>
  );
}
