import React, { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { add, decrement, increment, mul, changeMulValue } from 'actions';
import { CounterState } from 'reducer';
import CounterBoard from 'components/organisms/CounterBoard';

const EnhancedCounterBoard: FC = () => {
  const count = useSelector<CounterState, number>((state) => state.count);
  const mulValue = useSelector<CounterState, number>((state) => state.mulValue);
  const dispatch = useDispatch();

  return (
    <CounterBoard
      count={count}
      mulValue={mulValue}
      add={(amount: number) => dispatch(add(amount))}
      decrement={() => dispatch(decrement())}
      increment={() => dispatch(increment())}
      mul2={(amount: number) => dispatch(mul(amount))}
      changeMulValue={(amount: number) => dispatch(changeMulValue(amount))}
    />
  );
};

export default EnhancedCounterBoard;
