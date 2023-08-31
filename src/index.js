import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './contectApi/App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <CounterThemeProvider>
      <App />
    </CounterThemeProvider>
   </React.StrictMode>
);
