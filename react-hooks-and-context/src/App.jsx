import styles from './App.module.css';
import { useState, useEffect } from 'react';
import { A11yHidden } from './components';

function App() {
  return (
    <div className={styles.container}>
      <h1>App</h1>

      <section>
        <A11yHidden as="h2">Section Title</A11yHidden>
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
