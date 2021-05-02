export const CounterActionType = {
  ADD: 'ADD',
  DECREMENT: 'DECREMENT',
  INCREMENT: 'INCREMENT',
  MUL: 'MUL',
  CHANGE_MUL_VALUE: 'CHANGE_MUL_VALUE',
} as const;

type ValueOf<T> = T[keyof T];

export type CounterAction = {
  type: ValueOf<typeof CounterActionType>;
  amount?: number;
};

export const add = (amount: number): CounterAction => ({
  type: CounterActionType.ADD,
  amount,
});

export const decrement = (): CounterAction => ({
  type: CounterActionType.DECREMENT,
});

export const increment = (): CounterAction => ({
  type: CounterActionType.INCREMENT,
});

export const mul = (amount: number): CounterAction => ({
  type: CounterActionType.MUL,
  amount,
});

export const changeMulValue = (amount: number): CounterAction => ({
  type: CounterActionType.CHANGE_MUL_VALUE,
  amount,
});
