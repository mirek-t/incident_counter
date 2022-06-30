import "./App.css";
import Counter from "./Counter";
import { Provider } from "react-redux";
import { store } from "./store";
import SetCounter from "./SetCounter";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Counter />
        <SetCounter />
      </div>
    </Provider>
  );
}

export default App;
