import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {ApolloProvider} from "@apollo/client";
import client from "./apollo/client";
import {App} from "./App";
import dayjs from "dayjs";
import 'dayjs/locale/ru'
import relativeTime from "dayjs/plugin/relativeTime";
dayjs.extend(relativeTime)
dayjs.locale('ru')


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <ApolloProvider client={client}>
    <App/>
  </ApolloProvider>
);


