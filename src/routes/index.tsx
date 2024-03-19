import { createBrowserRouter, RouteObject } from 'react-router-dom'
import { authRoutes } from '@/features/authentication'
import { miscRoutes } from '@/features/misc'
import { MainLayout, ProtectedRoute } from '@/components'
import { examRoutes } from '@/features/exam'
import { profileRoutes } from '@/features/profile'
import { aboutRoutes } from '@/features/about'
import { forumRoutes } from '@/features/forum'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <ProtectedRoute />,
    children: [
      {
        path: '/',
        element: <MainLayout />,
        children: [examRoutes, profileRoutes, forumRoutes, aboutRoutes],
      },
    ],
  },
  { ...authRoutes },
  { ...miscRoutes },
] as RouteObject[])
