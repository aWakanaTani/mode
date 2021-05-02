import React, { FC } from 'react';
import { Button, Card, Statistic } from 'semantic-ui-react';
import './CounterBoard.css';

const BULK_UNIT = 10;
type Props = {
  count?: number;
  mulValue: number;
  add?: (amount: number) => void;
  decrement?: () => void;
  increment?: () => void;
  mul2?: (amount: number) => void;
  changeMulValue: (mulValue: number) => void;
};

const CounterBoard: FC<Props> = ({
  count = 0,
  mulValue,
  add = () => undefined,
  decrement = () => undefined,
  increment = () => undefined,
  mul2 = () => undefined,
  changeMulValue = () => undefined,
}) => (
  <Card>
    <Statistic className="number-board">
      <Statistic.Label>count</Statistic.Label>
      <Statistic.Value>{count}</Statistic.Value>
    </Statistic>
    <Card.Content>
      <div className="ui two buttons">
        <Button color="red" onClick={decrement}>
          -1
        </Button>
        <Button color="green" onClick={increment}>
          +1
        </Button>
      </div>
      <div className="fluid-button">
        <Button fluid color="grey" onClick={() => add(BULK_UNIT)}>
          +{BULK_UNIT}
        </Button>
      </div>

      <div className="double-button">
        <input
          type="number"
          value={mulValue}
          onChange={(e) => changeMulValue(Number(e.target.value))}
        />
        <Button positive>決定</Button>
        <Button fluid color="blue" onClick={() => mul2(BULK_UNIT)}>
          ×{BULK_UNIT}
        </Button>
      </div>
    </Card.Content>
  </Card>
);

export default CounterBoard;
