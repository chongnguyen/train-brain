import { redirect, RouteObject } from 'react-router-dom'
import { Layout, LoginForm, RegisterForm } from '../components'

export const authenticationRoutes: RouteObject = {
  path: '/auth',
  element: <Layout />,
  children: [
    {
      index: true,
      loader: () => {
        return redirect('login')
      },
    },
    {
      path: 'login',
      element: <LoginForm />,
    },
    {
      path: 'register',
      element: <RegisterForm />,
    },
  ],
}
