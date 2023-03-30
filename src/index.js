import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Provider } from 'react-redux';
import store from './Store'
import { GoogleOAuthProvider } from '@react-oauth/google';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <GoogleOAuthProvider clientId="30424927462-f4kujvrvo1q58d8kgaobkn7tar7m0bp8.apps.googleusercontent.com">
      <App />
    </GoogleOAuthProvider>
  </Provider>
);

