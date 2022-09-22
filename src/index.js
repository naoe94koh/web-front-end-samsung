import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './app/App';

const container = document.getElementById('root');
const reactDOMRoot = ReactDOM.createRoot(container);

reactDOMRoot.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
