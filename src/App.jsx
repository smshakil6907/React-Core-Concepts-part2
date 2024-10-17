import "./App.css";
import Counter from "./Counter";
import Friends from "./Friends";
import Users from "./Users";
function App() {
  function handelClick() {
    alert("button click");
  }
  function addToFive(num) {
    alert(num + 5);
  }
  return (
    <>
      <h3>React Core Concepts 2</h3>
      <Friends></Friends>
      <Users></Users>
      <Counter></Counter>
      <button onClick={handelClick}>Click Me</button>
      <button
        onClick={() => {
          alert("click 2");
        }}
      >
        Click2
      </button>
      <button onClick={() => addToFive(3)}>click 3</button>
    </>
  );
}

export default App;
