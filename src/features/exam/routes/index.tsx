import { RouteObject } from 'react-router-dom'
import { Exam, Layout } from '../components'

export const examRoutes: RouteObject = {
  path: '/exam',
  element: <Layout />,
  children: [{ path: '/exam', element: <Exam /> }],
}
