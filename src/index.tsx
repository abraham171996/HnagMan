import React from 'react';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import ReactDOM, { createRoot } from 'react-dom/client';
import App from "../src/components/App/App"
import './styles/global.scss'


function initialization() {
  const root = createRoot(document.getElementById('root')!);
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
}

initialization()

