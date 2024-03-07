import { RouteObject } from 'react-router-dom'
import { Layout } from '../components'

export const forumRoutes: RouteObject = {
  path: '/forum',
  element: <Layout />,
  children: [],
}
