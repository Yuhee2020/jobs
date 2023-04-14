import React from 'react'

import { ApolloProvider } from '@apollo/client'
import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
import ReactDOM from 'react-dom/client'
import './index.scss'

import client from './apollo/client'
import { App } from './App'

import 'dayjs/locale/ru'

dayjs.extend(relativeTime)
dayjs.locale('ru')

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)

root.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
)
