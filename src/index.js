import ReactDOM from 'react-dom/client';

import App from './App';
import { ConfigurationProvider } from './contexts/configuration.context';

import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ConfigurationProvider>
    <App />
  </ConfigurationProvider>
);
