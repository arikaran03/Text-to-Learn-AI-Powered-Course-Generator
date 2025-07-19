// import { StrictMode } from 'react'; 
// import { createRoot } from 'react-dom/client';
// import App from './App.jsx';
// import {Auth0Provider} from "@auth0/auth0-react";

// const domain = process.env.REACT_APP_AUTH0_DOMAIN_ID;
// const client = process.env.REACT_APP_AUTH0_CLIENT_ID;
// const audience = process.env.REACT_APP_AUTH0_AUDIENCE_ID;

// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//   <Auth0Provider
//     domain={domain}
//     clientId={client}
//     authorizationParams={{
//     redirect_uri: window.location.origin // <-- Moved and renamed
//     }}
//   >
//     <App />
//   </Auth0Provider>
//   </StrictMode>,
// )

// import React from 'react';
// import { createRoot } from 'react-dom/client';
// import { BrowserRouter } from 'react-router-dom';
// import { Auth0Provider } from "@auth0/auth0-react";
// import App from './App.jsx';

// const domain = process.env.REACT_APP_AUTH0_DOMAIN_ID;
// const clientId = process.env.REACT_APP_AUTH0_CLIENT_ID;
// const audience = process.env.REACT_APP_AUTH0_AUDIENCE_ID;



import React from 'react';
import ReactDOM from 'react-dom/client';
import { Auth0Provider } from '@auth0/auth0-react';
import App from './App';
// import './index.css';

// Replace these with your actual Auth0 application details from your dashboard
const AUTH0_DOMAIN = process.env.REACT_APP_AUTH0_DOMAIN_ID;
const AUTH0_CLIENT_ID = process.env.REACT_APP_AUTH0_CLIENT_ID;
const AUTH0_AUDIENCE = process.env.REACT_APP_AUTH0_AUDIENCE_ID;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Auth0Provider
      domain={AUTH0_DOMAIN}
      clientId={AUTH0_CLIENT_ID}
      authorizationParams={{
        redirect_uri: window.location.origin,
        audience: AUTH0_AUDIENCE, // The audience of the API you want to call
        scope: "read:courses" // Example scope
      }}
    >
      <App />
    </Auth0Provider>
  </React.StrictMode>
);