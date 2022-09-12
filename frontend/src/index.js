import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from '../node_modules/react-router-dom/index';
import rootReducer, { rootSaga } from './modules/index';
import { composeWithDevTools } from '../node_modules/redux-devtools-extension/index';
import { applyMiddleware, createStore } from 'redux';
import { Provider } from '../node_modules/react-redux/es/exports';
import createSagaMiddleware from 'redux-saga';
import { check, tempSetUser } from './modules/user';
import { HelmetProvider } from 'react-helmet-async';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(sagaMiddleware)));

function loadUser() {
  try {
    const user = localStorage.getItem('user');
    if (!user) return;
    store.dispatch(tempSetUser(JSON.parse(user)));
    store.dispatch(check());
  } catch (e) {
    console.log('error');
  }
}

sagaMiddleware.run(rootSaga);
loadUser();

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <React.StrictMode>
      <BrowserRouter>
        <HelmetProvider>
          <App />
        </HelmetProvider>
      </BrowserRouter>
    </React.StrictMode>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
