import React from "react";
import { defaultGlobalState, IGlobalState } from "./default.state";


function getDefaultState() {
  const stateFromLS = localStorage.getItem('state');
  if (!!stateFromLS) {
    try {
      const parsed = JSON.parse(stateFromLS);
      return parsed;
    } catch (e) {
      return defaultGlobalState;
    }
  }
  return defaultGlobalState;
}

const globalStateContext = React.createContext(getDefaultState());
const dispatchStateContext = React.createContext(undefined) as any;

export const GlobalStateProvider = ({ children }: any) => {
  const [state, dispatch] = React.useReducer(
    (state: IGlobalState, newValue: Partial<IGlobalState>) => {
      localStorage.setItem('state', JSON.stringify({ ...state, ...newValue }));
      return {
        ...state,
        ...newValue,
      };
    },
    getDefaultState()
  );
  return (
    <globalStateContext.Provider value={state}>
      <dispatchStateContext.Provider value={dispatch}>
        {children}
      </dispatchStateContext.Provider>
    </globalStateContext.Provider>
  );
};
export const useGlobalState = (): [
  IGlobalState,
  (args: Partial<IGlobalState>) => void
] => [
  React.useContext(globalStateContext),
  React.useContext(dispatchStateContext),
];
