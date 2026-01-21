import { useReducer } from "react";
import Layout from "./components/Layout";
import {
  uiReducer,
  initialState,
} from "./reducer/uiReducer";

function App() {
  const [state, dispatch] = useReducer(uiReducer, initialState);

  return <Layout state={state} dispatch={dispatch} />;
}

export default App;
