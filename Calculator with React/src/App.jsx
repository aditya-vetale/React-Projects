import { useState } from "react";
import "./App.css";
import Button from "./components/Button.jsx";
import Input from "./components/input.jsx";
import { evaluate } from "mathjs";

function App() {
  const [expression, setExpression] = useState("");

  function handleExpression(value) {
    if (value === "=") {
      try {
        setExpression(evaluate(expression));
      } catch (error) {
        console.log("Error message:", error.message);
      }
    } else if (value === "Clear") {
      setExpression("");
    } else {
      setExpression(expression + value);
    }
  }
  return (
    <>
      <div className="row">
        <Input>{expression}</Input>
      </div>

      <div className="row">
        <Button updateExpression={handleExpression}>7</Button>
        <Button updateExpression={handleExpression}>8</Button>
        <Button updateExpression={handleExpression}>9</Button>
        <Button updateExpression={handleExpression}>-</Button>
      </div>
      <div className="row">
        <Button updateExpression={handleExpression}>4</Button>
        <Button updateExpression={handleExpression}>5</Button>
        <Button updateExpression={handleExpression}>6</Button>
        <Button updateExpression={handleExpression}>*</Button>
      </div>
      <div className="row">
        <Button updateExpression={handleExpression}>1</Button>
        <Button updateExpression={handleExpression}>2</Button>
        <Button updateExpression={handleExpression}>3</Button>
        <Button updateExpression={handleExpression}>/</Button>
      </div>
      <div className="row">
        <Button updateExpression={handleExpression}>.</Button>
        <Button updateExpression={handleExpression}>0</Button>
        <Button updateExpression={handleExpression}>=</Button>
        <Button updateExpression={handleExpression}>+</Button>
      </div>
      <div className="row">
        <Button updateExpression={handleExpression}>Clear</Button>
      </div>
    </>
  );
}

export default App;
