// components/Layout.tsx

import type { UIState, UIAction } from "../reducer/uiReducer";

interface Props {
  state: UIState;
  dispatch: React.Dispatch<UIAction>;
}

function Layout({ state, dispatch }: Props) {
  return (
    <div
      style={{
        backgroundColor: state.isDark ? "black" : "white",
        color: state.isDark ? "white" : "black",
        fontSize: `${state.fSize}px`,
        padding: "40px",
        minHeight: "100vh",
      }}
    >
      <h1>useReducer Exercise</h1>

      <p>
        This is some dummy text to demonstrate dark mode and font size control.
      </p>

      <div style={{ marginTop: "20px" }}>
        <button onClick={() => dispatch({ type: "TOGGLE_DARK" })}>
          Toggle Dark Mode
        </button>

        <button
          onClick={() => dispatch({ type: "INCREASE_FONT" })}
          style={{ marginLeft: "10px" }}
        >
          Increase Font Size
        </button>

        <button
          onClick={() => dispatch({ type: "DECREASE_FONT" })}
          style={{ marginLeft: "10px" }}
        >
          Decrease Font Size
        </button>
      </div>
    </div>
  );
}

export default Layout;
