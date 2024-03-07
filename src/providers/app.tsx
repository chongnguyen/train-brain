import { ReactNode } from 'react'
import { AuthProvider } from '@/providers/authentication.tsx'

export const AppProvider = ({
  children,
}: {
  children: ReactNode | ReactNode[]
}) => {
  return (
    <>
      <AuthProvider>{children}</AuthProvider>
    </>
  )
}
