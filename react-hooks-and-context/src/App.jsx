import styles from './App.module.css';
import { useState, useEffect } from 'react';
import { A11yHidden } from './components';

function App() {
  return (
    <div className={styles.container}>
      <div className="skipToContent">
        <A11yHidden
          as="a"
          href="#section-1"
          style={{
            position: 'fixed',
            top: 0,
            right: 20,
          }}
          focusable
        >
          Go Section 1
        </A11yHidden>
        <A11yHidden
          as="a"
          href="#section-2"
          style={{
            position: 'fixed',
            top: 0,
            right: 20,
          }}
          focusable
        >
          Go Section 2
        </A11yHidden>
        <A11yHidden
          as="a"
          href="#section-3"
          style={{
            position: 'fixed',
            top: 0,
            right: 20,
          }}
          focusable
        >
          Go Section 3
        </A11yHidden>
      </div>

      <h1>App</h1>

      <section>
        <h2 id="section-1">Section Title</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Adipisci aut
          earum corporis amet fugiat nobis eligendi, repudiandae laboriosam illo
          dignissimos?
        </p>
        <p>
          Laudantium nesciunt asperiores ea dolor iusto suscipit fuga officia
          porro optio? Voluptate veniam ex ullam totam illum aliquid, reiciendis
          quia?
        </p>
      </section>
    </div>
  );
}

export default App;
