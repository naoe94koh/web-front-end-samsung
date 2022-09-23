import { useState, useCallback, useMemo } from 'react';
import { any, number } from 'prop-types';

const Counter = ({ count: initialCount }) => {
  const [count, setCount] = useState(initialCount);

  // useCallback
  // 함수 값만 기억
  const handleInc = useCallback(() => setCount((count) => count + 1), []);
  const handleDec = useCallback(() => setCount((count) => count - 1), []);

  // useMemo
  // 함수를 포함한 모든 값을 기억
  // 숫자, 문자, 불리언, ...., 함수, 객체, 배열, 클래스
  const memoIncButton = useMemo(
    () => <Counter.Button onClick={handleInc}>값 증가</Counter.Button>,
    []
  );
  const memoDecButton = useMemo(
    () => <Counter.Button onClick={handleDec}>값 감소</Counter.Button>,
    []
  );

  return (
    <div
      css={`
        margin: 5rem;
        padding: 2em;
      `}
    >
      {memoIncButton}
      {memoDecButton}
      <Counter.Display count={count} />
    </div>
  );
};

Counter.defaultProps = {
  count: 0,
};

Counter.propTypes = {
  count: number,
};

// eslint-disable-next-line react/prop-types
Counter.Button = function CounterButton({ children, ...restProps }) {
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
};

Counter.Button.propTypes = {
  children: any,
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

Counter.Display.propTypes = {
  count: number,
};

export default Counter;
