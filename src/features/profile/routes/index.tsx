import { RouteObject } from 'react-router-dom'
import { Layout } from '../components'

export const profileRoutes: RouteObject = {
  path: '/profile',
  element: <Layout />,
  children: [],
}
