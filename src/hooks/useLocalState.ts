import { useReducer } from 'react';

export const useLocalState = <State>(initialState: State) => {
  const stateAndSetState = useReducer(
    (oldState: State, stateToMerge: Partial<State>): State => ({
      ...oldState,
      ...stateToMerge,
    }),
    initialState
  );

  return stateAndSetState;
};
