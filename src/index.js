import React from 'react';
import ReactDOM from 'react-dom/client';
import App from 'App';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store, { persistor } from 'store/store';
import { PersistGate } from 'redux-persist/integration/react';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter basename="goit-react-hw-06-phonebook">
    <React.StrictMode>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <App />
        </PersistGate>
      </Provider>
    </React.StrictMode>
  </BrowserRouter>
);
