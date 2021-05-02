import { Reducer } from 'redux';
import { CounterAction, CounterActionType as Type } from 'actions';

export type CounterState = {
  count: number;
  mulValue: number;
};

export const initialState: CounterState = {
  count: 0,
  mulValue: 0,
};

export const counterReducer: Reducer<CounterState, CounterAction> = (
  state: CounterState = initialState,
  action: CounterAction,
): CounterState => {
  switch (action.type) {
    case Type.ADD:
      return {
        ...state,
        count: state.count + (action.amount || 0),
      };
    case Type.DECREMENT:
      return {
        ...state,
        count: state.count - 1,
      };
    case Type.INCREMENT:
      return {
        ...state,
        count: state.count + 1,
      };
    case Type.MUL:
      return {
        ...state,
        count: state.count * (action.amount || 0),
      };
    case Type.CHANGE_MUL_VALUE:
      return {
        ...state,
        mulValue: action.amount || 0,
      };
    default: {
      return state;
    }
  }
};
