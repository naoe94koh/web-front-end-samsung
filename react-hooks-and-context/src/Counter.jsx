import { useState, useEffect, useCallback, memo } from 'react';
import { any, number } from 'prop-types';

const Counter = ({ count: initialCount }) => {
  const [n, setN] = useState(1000);

  useEffect(() => {
    let clearId = setInterval(() => setN((n) => n - 10), 600);
    return () => clearInterval(clearId);
  }, []);

  const [count, setCount] = useState(initialCount);
  const handleInc = useCallback(() => setCount((count) => count + 1), []);
  const handleDec = useCallback(() => setCount((count) => count - 1), []);

  return (
    <div
      css={`
        margin: 5rem;
        padding: 2em;
      `}
    >
      <Counter.Button onClick={handleInc}>값 증가</Counter.Button>
      <Counter.Button onClick={handleDec}>값 감소</Counter.Button>
      <Counter.Display count={count} />
      {n}
    </div>
  );
};

Counter.defaultProps = {
  count: 0,
};

Counter.propTypes = {
  count: number,
};

/* CounterButton ------------------------------------------------------------ */

Counter.Button = memo(function CounterButton({ children, ...restProps }) {
  return (
    <button
      type="button"
      css={`
        margin: 0 2px;
      `}
      {...restProps}
    >
      {children}
    </button>
  );
});

Counter.Button.propTypes = {
  children: any,
};

/* CounterDisplay ----------------------------------------------------------- */

Counter.Display = memo(function CountDisplay({ count }) {
  return (
    <output
      css={`
        display: block;
        padding: 20px;
      `}
    >
      {count}
    </output>
  );
});

Counter.Display.propTypes = {
  count: number,
};

export default Counter;
