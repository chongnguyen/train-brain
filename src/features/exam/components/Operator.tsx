import * as React from 'react'
import { cn } from '@/utils'

export interface OperatorProps
  extends React.BaseHTMLAttributes<HTMLDivElement> {
  value: string | number
}

export const Operator = ({ value, className }: OperatorProps) => {
  return (
    <div
      className={cn(
        'text-xl border rounded-lg w-[40px] h-[40px] leading-[40px] text-center font-bold',
        className
      )}
    >
      {value}
    </div>
  )
}
