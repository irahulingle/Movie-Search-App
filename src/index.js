import React from 'react';
import ReactDOM from 'react-dom/client'; // ✅ correct import for React 18+
import App from './App';
import './index.css'; // optional, only if file exists

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
