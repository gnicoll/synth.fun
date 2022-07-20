import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './apps/App';
import reportWebVitals from './reportWebVitals';
import { sendToVercelAnalytics } from './vitals';
import {SynthProvider} from './context/SynthContext';
import {SequenceProvider} from './context/SequenceContext';

ReactDOM.render(
  <React.StrictMode>
    <SynthProvider>
      <SequenceProvider>
        <App />
      </SequenceProvider>
    </SynthProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals(sendToVercelAnalytics);
