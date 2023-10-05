import ReactDOM from 'react-dom/client';

import App from './App';

import './index.css';

const vh = window.innerHeight * 0.01;
document.documentElement.style.setProperty('--vh', `${vh}px`);
document.body.setAttribute(
  'style',
  `height: calc(var(--vh, 1vh) * 100);`
);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <App />
);
