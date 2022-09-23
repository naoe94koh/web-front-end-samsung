import { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(10);

  return (
    <div
      css={`
        margin: 5rem;
        padding: 2em;
      `}
    >
      <Counter.Button onClick={() => setCount((count) => count + 1)}>
        값 증가
      </Counter.Button>
      <Counter.Button onClick={() => setCount((count) => count - 1)}>
        값 감소
      </Counter.Button>
      <Counter.Display count={count} />
    </div>
  );
};

Counter.Button = function CounterButton({ children, ...restProps }) {
  return (
    <button type="button" {...restProps}>
      {children}
    </button>
  );
};

Counter.Display = function CountDisplay({ count }) {
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
};

export default Counter;
