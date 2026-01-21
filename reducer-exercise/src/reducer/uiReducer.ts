// reducer/uiReducer.ts

export interface UIState {
  isDark: boolean;
  fSize: number;
}

export type UIAction =
  | { type: "TOGGLE_DARK" }
  | { type: "INCREASE_FONT" }
  | { type: "DECREASE_FONT" };

export const initialState: UIState = {
  isDark: false,
  fSize: 16,
};

export function uiReducer(
  state: UIState,
  action: UIAction
): UIState {
  switch (action.type) {
    case "TOGGLE_DARK":
      return {
        ...state,
        isDark: !state.isDark,
      };

    case "INCREASE_FONT":
      return {
        ...state,
        fSize: state.fSize + 1,
      };

    case "DECREASE_FONT":
      return {
        ...state,
        fSize: state.fSize - 1,
      };

    default:
      return state;
  }
}
