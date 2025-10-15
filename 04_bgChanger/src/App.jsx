import { Pointer } from "lucide-react";
import { useState } from "react";

function App() {
  const [color, setColor] = useState("skyblue");

  return (
    <div className="w-full h-screen" style={{ backgroundColor: color }}>
      <div className="fixed flex flex-wrap justify-center top-10 inset-x-0 px-0">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-amber-100 px-3 py-2 rounded-3xl">
          <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
            Made by Ansh
          </div>
          <button
            onClick={() => setColor("red")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg font-mono"
            style={{ backgroundColor: "red", cursor: "pointer" }}
          >
            Red
          </button>
          {/* onClick expects a function reference, not the result of a function. */}
          {/* Here, () => setColor("red") is a function that React will call later when the button is clicked. */}
          <button
            onClick={() => setColor("green")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg font-mono"
            style={{ backgroundColor: "green", cursor: "pointer" }}
          >
            Green
          </button>
          <button
            onClick={() => setColor("blue")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg font-mono"
            style={{ backgroundColor: "blue", cursor: "pointer" }}
          >
            Blue
          </button>
          <button
            onClick={() => setColor("yellow")}
            className="outline-none px-4 py-1 rounded-full text-black shadow-lg font-mono"
            style={{ backgroundColor: "yellow", cursor: "pointer" }}
          >
            Yellow
          </button>
          <button
            onClick={() => setColor("purple")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg font-mono"
            style={{ backgroundColor: "purple", cursor: "pointer" }}
          >
            Purple
          </button>
          <button
            onClick={() => setColor("Grey")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg font-mono"
            style={{ backgroundColor: "Grey", cursor: "pointer" }}
          >
            Grey
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
