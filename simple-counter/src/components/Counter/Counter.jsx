import { useState } from 'react';
import classes from './Counter.module.css';

export function Counter({ count: initialCount, step, min, max }) {
  const [count, setCount] = useState(initialCount);

  return (
    <div className={classes.container}>
      <button
        className={`${classes.button} ${classes.decrement}`}
        type="button"
        title="카운트 감소"
        aria-label="카운트 감소"
        onClick={() => setCount(count - step)}
      >
        -
      </button>
      <output className={classes.output}>{count}</output>
      <button
        className={`${classes.button} ${classes.increment}`}
        type="button"
        title="카운트 증가"
        aria-label="카운트 증가"
        onClick={() => setCount(count + step)}
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
