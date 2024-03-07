import { ReactNode } from 'react'

export const AppProvider = ({
  children,
}: {
  children: ReactNode | ReactNode[]
}) => {
  return <>{children}</>
}
