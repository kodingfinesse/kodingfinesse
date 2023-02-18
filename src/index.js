import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Layout } from './components/Layout';
import { HashRouter } from 'react-router-dom';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <HashRouter>
    <Layout>
      <App />
    </Layout>
  </HashRouter>
);