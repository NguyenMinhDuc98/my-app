import "./App.css";
import DisplayComponent from "./HOCs/DisplayComponent";
import MousePosition from "./HOCs/MousePosition";
import logo from "./logo.svg";

function App() {
  // const position = useMousePosition();
  // now User can say hi
  // new User("Dude").sayHi(); // Hi Dude!

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div style={{ height: "100%" }}>
          {/* <Mouse render={({ x, y }) => <MousePosition x={x} y={y} />} /> */}
          {/* {position} */}
          <MousePosition TempComponent={DisplayComponent} />
        </div>
      </header>
    </div>
  );
}

export default App;
