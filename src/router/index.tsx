import React, { lazy } from 'react'
import { useRoutes } from 'react-router-dom'
import AppLayout from '@/Layout/AppLayout'
import Login from '@/views/Login'

import PageOne from '@/views/PageOne'
import PageTwo from '@/views/PageTwo'
import PageThree from '@/views/PageThree'
import PageFour from '@/views/PageFour'
import Opps from '@/views/Opps'
import HomePage from '@/views/HomePage'

// const LoadComponent = (componentName: string): JSX.Element => {
//   return lazy(() => import(`@/views/{componentName}`))
// }

const routesRecord = [
  {
    path: '/',
    element: <AppLayout />,
    children: [
      {
        path: '',
        element: <HomePage />
      }
    ]
  },
  {
    path: '/login',
    element: <AppLayout />,
    children: [
      {
        path: '',
        element: <Login />
      }
    ]
  },
  {
    path: '/page',
    element: <AppLayout />,
    children: [
      {
        path: '',
        element: <div>default</div>
      },
      {
        path: '1',
        element: <PageOne />
      },
      {
        path: '2',
        element: <PageTwo />
      },
      {
        path: '3',
        element: <PageThree />
      },
      {
        path: '4',
        element: <PageFour />
      }
    ]
  },
  {
    path: '/opps',
    element: <Opps />
  }
]

const RootRouter = ()=> {
  return useRoutes(routesRecord)
}

export default RootRouter