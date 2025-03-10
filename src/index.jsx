import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from "./components/ui/provider"
import { BrowserRouter } from 'react-router-dom';
import ScrollToTop from './components/scroll-to-top'
import { ParallaxProvider } from 'react-scroll-parallax';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode> - when using useEffect, it renders twice.
  <BrowserRouter>
    <Provider>
      <ScrollToTop />
      <ParallaxProvider>
        <App />
      </ParallaxProvider>
    </Provider>
  </BrowserRouter>
  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
