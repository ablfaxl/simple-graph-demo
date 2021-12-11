import React from 'react';
import ReactDOM from 'react-dom';
import './globals'
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ApolloProvider } from '@apollo/react-hooks'
import apolloClient from './apollo-client'

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={apolloClient}>
      <App />
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
