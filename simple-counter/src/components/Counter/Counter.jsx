import { useState } from 'react';
import classes from './Counter.module.css';

export function Counter({
  count: initialCount,
  step,
  min,
  max,
  onUpdate,
  ...restProps
}) {
  const [count, setCount] = useState(initialCount);

  let lessThenAndEqualMin = count <= min;
  let greaterThenAndEqualMax = count >= max;

  const handleDecrement = () => {
    let updateValue = count - step;
    updateValue = updateValue <= min ? min : updateValue;
    setCount(updateValue);
    onUpdate?.(restProps['data-id'], false);
  };

  const handleIncrement = () => {
    let updateValue = count + step;
    updateValue = updateValue >= max ? max : updateValue;
    setCount(updateValue);
    onUpdate?.(restProps['data-id'], true);
  };

  return (
    <div className={classes.container} {...restProps}>
      <button
        className={`${classes.button} ${classes.decrement}`}
        type="button"
        title="카운트 감소"
        aria-label="카운트 감소"
        disabled={lessThenAndEqualMin}
        onClick={handleDecrement}
      >
        -
      </button>
      <output className={classes.output}>{count}</output>
      <button
        className={`${classes.button} ${classes.increment}`}
        type="button"
        title="카운트 증가"
        aria-label="카운트 증가"
        disabled={greaterThenAndEqualMax}
        onClick={handleIncrement}
      >
        +
      </button>
    </div>
  );
}

Counter.defaultProps = {
  count: 0,
  step: 1,
  min: 0,
  max: 10,
};
