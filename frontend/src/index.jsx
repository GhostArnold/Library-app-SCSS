import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import 'normalize.css';
import store from './redux/store.js';
import './index.css';
import App from './App.jsx';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // Чтобы хранилище было доступно для всего дерева компонентов. Это нужно, чтобы компоненты могли подписываться и отправлять действия для изменения состояния. В параметрах указывается хранилище
  <Provider store={store}>
    <StrictMode>
      <App />
    </StrictMode>
  </Provider>
);
