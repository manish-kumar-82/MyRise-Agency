import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { HelmetProvider } from 'react-helmet-async'
import ReactGA from "react-ga4";

ReactGA.initialize("G-THM58EWSLJ");
ReactGA.send({
hitType: "pageview",
page: window.location.pathname,
});

createRoot(document.getElementById("root")).render(
 <HelmetProvider>
    <App />
</HelmetProvider>
);