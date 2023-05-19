import "./Button.css";

function isOperator(val) {
  return !val === "." || val === "=" || isNaN(val);
}

function App({ children, updateExpression }) {
  function handleClick() {
    updateExpression(children);
  }
  return (
    <div>
      <button
        className={isOperator(children) ? "operator" : "button"}
        onClick={handleClick}
      >
        {children}
      </button>
    </div>
  );
}

export default App;
