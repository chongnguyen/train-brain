import { RouteObject } from 'react-router-dom'
import { NotFound } from '../components'

export const miscRoutes: RouteObject = {
  path: '*',
  element: <NotFound />,
}
