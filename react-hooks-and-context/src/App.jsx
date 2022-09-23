import styles from './App.module.css';
import { useState, useEffect } from 'react';
import {
  A11yHidden,
  SR_Only,
  Banner,
  Spinner,
  ErrorDisplay,
  SkipToContent,
  Content,
} from './components';

import { useFetch } from './hooks/useFetch';

function App() {
  const { loading, error, data } = useFetch('/api/todos');

  console.log({
    loading,
    error,
    data,
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
    <div className={styles.container}>
      <SkipToContent />
      <Content />
    </div>
  );
}

export default App;
