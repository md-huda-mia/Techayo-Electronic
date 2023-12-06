import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./router/router.jsx";
import { Auth0Provider } from "@auth0/auth0-react";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Auth0Provider
    domain="dev-nfk8l14dfv10dpur.us.auth0.com"
    clientId="KmCh8kGB83DcFIWcjWXhkPGEO9PbszEt"
    authorizationParams={{
      redirect_uri: window.location.origin,
    }}>
    <RouterProvider router={router}></RouterProvider>
  </Auth0Provider>
);
