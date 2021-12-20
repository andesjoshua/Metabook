import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {MoralisProvider} from 'react-moralis'
import {BrowserRouter} from 'react-router-dom';

const moraliisAppId = "AArzOFcU6CsJ9lJnop3lgm2q2GoadJl2Cd3rrBN5"
const moralisServerURL = "https://2b4f2b9jaqmn.usemoralis.com:2053/server"

ReactDOM.render(
  <React.StrictMode>
    <MoralisProvider appId={moraliisAppId} serverUrl={moralisServerURL}>
      <BrowserRouter>
        <App appId={moraliisAppId} serverUrl={moralisServerURL}/>
      </BrowserRouter>
    </MoralisProvider>
  </React.StrictMode>,
  document.getElementById('root')
);