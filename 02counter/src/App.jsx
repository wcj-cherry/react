import React, { useState } from "react";
import { ToastContainer, Zoom, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import Color from "./Color.jsx";

function App() {
  const [counter, setCount] = useState(0);
  const toastId = React.useRef(null);

  const addmsg = () => {
    if (!toast.isActive(toastId.current)) {
      console.log(toastId.current);
      toastId.current = toast.info("Toast", {
        position: "top-center",
        autoClose: 3000,
      });
    }
  };

  const removemsg = () => {
    if (!toast.isActive(toastId.current)) {
      toastId.current = toast.warn("Last Number reached", {
        position: "top-center",
        autoClose: 3000,
        transition: Zoom,
      });
    }
  };

  const addCounter = () => (counter < 3 ? setCount(counter + 1) : addmsg());

  const removeCounter = () =>
    counter > 0 ? setCount(counter - 1) : removemsg();

  return (
    <>
      <h1>Counter</h1>
      <h2 className="my-4 text-lg text-cyan-400">Counter Value {counter}</h2>
      <button onClick={addCounter} className="m-4">
        Add Counter{" "}
      </button>
      <button onClick={removeCounter} className="m-4">
        Remove Counter
      </button>
    </>
  );
}

export default App;
