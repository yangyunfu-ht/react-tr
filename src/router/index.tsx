import React, { lazy, Suspense } from 'react'
import { useRoutes } from 'react-router-dom'
import AppLayout from '@/Layout/AppLayout'

const HomePage = lazy(() => import('@/views/HomePage'))
const Login = lazy(() => import('@/views/Login'))
const PageOne = lazy(() => import('@/views/PageOne'))
const PageTwo = lazy(() => import('@/views/PageTwo'))
const PageThree = lazy(() => import('@/views/PageThree'))
const PageFour = lazy(() => import('@/views/PageFour'))
const Opps = lazy(() => import('@/views/Opps'))
const FullEditor = lazy(() => import('@/views/FullEditor'))

const Loading = () => {
  return <div>loadig....</div>
}


const routesRecord = [
  {
    path: '/',
    element: <AppLayout />,
    children: [
      {
        path: '',
        element: <Suspense fallback={<Loading />}>
          <HomePage />
        </Suspense>
      }
    ]
  },
  {
    path: '/login',
    element: <AppLayout />,
    children: [
      {
        path: '',
        element: <Suspense fallback={<Loading />}>
          <Login />
        </Suspense>
      }
    ]
  },
  {
    path: '/editor',
    element: <AppLayout />,
    children: [
      {
        path: '',
        element: <Suspense fallback={<Loading />}>
          <FullEditor />
        </Suspense>
      }
    ]
  },
  {
    path: '/page',
    element: <AppLayout />,
    children: [
      {
        path: '',
        element: <Suspense fallback={<Loading />}>
          <div>
            page
          </div>
        </Suspense>
      },
      {
        path: '1',
        element: <Suspense fallback={<Loading />}>
          <PageOne />
        </Suspense>
      },
      {
        path: '2',
        element: <Suspense fallback={<Loading />}>
          <PageTwo />
        </Suspense>
      },
      {
        path: '3',
        element: <Suspense fallback={<Loading />}>
          <PageThree />
        </Suspense>
      },
      {
        path: '4',
        element: <Suspense fallback={<Loading />}>
          <PageFour />
        </Suspense>
      }
    ]
  },
  {
    path: '/opps',
    element: <Suspense fallback={<Loading />}>
      <Opps />
    </Suspense>
  }
]

const RootRouter = () => {
  return useRoutes(routesRecord)
}

export default RootRouter