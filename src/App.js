import { useEffect, useState } from "react";
function App() {
  const [input, setInput] = useState("");
  const [isValid, setIsValid] = useState(false);
  useEffect(() => {
    setIsValid(true);
    console.log("useEffect Running");
    return () => {
      console.log("Cleanup Running");
    };
  }, [input]);
  let inputHandler = (event) => {
    setInput(event.target.value);
  };
  return (
    <>
      <hr />
      <h2>useEffect use case</h2>
      <h3>Running on state change: validating input field</h3>
      <form>
        <label htmlFor="input">
          Write something (more than 5 non numerical characters is a valid
          input)
        </label>
        <br />
        <input
          type="text"
          id="input"
          autoComplete="off"
          onChange={inputHandler}
          style={{ height: "1.5rem", width: "20rem", marginTop: "1rem" }}
        />
      </form>
      <p>
        <span
          style={
            isValid
              ? { backgroundColor: "lightgreen", padding: ".5rem" }
              : { backgroundColor: "lightpink", padding: ".5rem" }
          }
        >
          {isValid ? "Valid input" : "Input not valid"}
        </span>
      </p>
    </>
  );
}

export default App;
