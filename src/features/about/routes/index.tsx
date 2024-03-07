import { RouteObject } from 'react-router-dom'
import { Layout } from '../components'

export const aboutRoutes: RouteObject = {
  path: '/about',
  element: <Layout />,
  children: [],
}
