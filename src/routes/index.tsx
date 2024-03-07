import { createBrowserRouter, RouteObject } from 'react-router-dom'
import { authenticationRoutes } from '@/features/authentication'
import { miscRoutes } from '@/features/misc'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <div>Hello world!</div>,
  },
  { ...authenticationRoutes },
  { ...miscRoutes },
] as RouteObject[])
