import styles from './App.module.css';
import { useState, useEffect, useRef } from 'react';
import {
  A11yHidden,
  SR_Only,
  Banner,
  Spinner,
  ErrorDisplay,
  ErrorBoundary,
  FormControl,
  SkipToContent,
  Content,
} from './components';

import { useFetch } from './hooks/useFetch';

function App() {
  const containerRef = useRef(null);

  const [visible, setVisible] = useState(true);

  const { loading, error, data } = useFetch('/api/todos');

  useEffect(() => {
    if (containerRef.current) {
      // jQuery 라이브러리
      // $(containerRef.current).plugin();
    }
  });

  if (loading) {
    return (
      <Spinner
        css={`
          position: fixed;
          top: 50%;
          left: 50%;
          translate: -50% -50%;
          width: 300px;
          height: 300px;
        `}
      />
    );
  }

  if (error) {
    return <ErrorDisplay role="alert">{error.message}</ErrorDisplay>;
  }

  return (
    <ErrorBoundary>
      <div ref={containerRef} className={styles.container}>
        <SkipToContent />
        <FormControl
          id="dkwD2ic"
          label="콘텐츠 표시"
          type="checkbox"
          inputProps={{
            checked: visible,
            onChange(e) {
              setVisible(e.target.checked);
            },
          }}
        />
        {visible && <Content />}
      </div>
    </ErrorBoundary>
  );
}

export default App;
