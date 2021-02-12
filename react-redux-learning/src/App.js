import "./App.css";
import { createStore } from "redux";
import { Provider } from "react-redux";
import rootReducer from "./SelfPractice/reducers/index";

const myStore = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

function App() {
  return (
    <Provider store={myStore}>
      <div className="App">wecome</div>
    </Provider>
  );
}

export default App;
