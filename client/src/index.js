import React from 'react';
import { createRoot } from 'react-dom/client';
 // importa la nueva API
import App from './App';
import { Provider } from 'react-redux';
import store from './reducer/store';
import { BrowserRouter } from 'react-router-dom';

// Crea una instancia de createRoot
const root = createRoot(document.getElementById('root'));

root.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);

