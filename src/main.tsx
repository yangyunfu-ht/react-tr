import React from 'react';
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from '@/store'
import RootRouter from "./router"
import './index.css'

import '@/utils/useScript'
import HTTP from '@/utils/Http'
import { zipCodeValidator} from "@/utils/speed"
import { toUnixPath } from './utils/toUnixPath';

console.log(import.meta.env)
console.log(toUnixPath('..\src\ss\cc'))


const rootNode = document.getElementById('root') as HTMLElement;

const root = createRoot(rootNode)

root.render(
  <Router>
    <Provider store={store}>
      <RootRouter />
    </Provider>
  </Router>
)





