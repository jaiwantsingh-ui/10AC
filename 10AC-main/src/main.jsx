import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* Add the BrowserRouter here with your specific repo name */}
    <BrowserRouter basename="/10AC/"> 
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
