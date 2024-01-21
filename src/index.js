import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

let root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <App name="Ravi">
    <div style={{ display: 'flex', gap: 15, padding: '2px 5px' }}>
      <button className="btn btn-primary">name</button>
      <button className="btn btn-primary">name</button>
      <button className="btn btn-primary">name</button>
    </div>
  </App>
);
