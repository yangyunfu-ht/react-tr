import React from 'react';
import { createRoot } from 'react-dom/client'
import RootRouter from "./router"
import { BrowserRouter as Router } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from '@/store'
import './index.css'

const rootNode = document.getElementById('root') as HTMLElement;

const root = createRoot(rootNode)

console.log(import.meta.env)

root.render(
  <Router>
    <Provider store={store}>
      <RootRouter />
    </Provider>
  </Router>
)