import * as React from 'react'
import { ChangeEvent, KeyboardEvent, useState } from 'react'
import { cn } from '@/utils'
import { Input } from '@/components/Form'
import { isNumber } from '../utils'

export interface ResultInputProps
  extends React.BaseHTMLAttributes<HTMLDivElement> {
  handleSubmitResult: (value: number) => void
}

export const ResultInput = ({
  className,
  handleSubmitResult,
}: ResultInputProps) => {
  const [value, setValue] = useState('')

  function handleChangeValue(event: ChangeEvent<HTMLInputElement>) {
    const { value } = event.target

    if (value && !isNumber(value)) {
      return
    }

    setValue(event.target.value.trim())
  }

  function handleOnKeyPress(e: KeyboardEvent<HTMLInputElement>) {
    if (e.key === 'Enter' || e.code === '13') {
      handleSubmitResult(+value)
      setValue('')
    }
  }

  return (
    <div
      className={cn(
        'text-xl border rounded-lg w-[80px] h-[40px] leading-[40px] text-center font-bold',
        className
      )}
    >
      <Input
        className="w-full text-center text-xl"
        value={value}
        onChange={handleChangeValue}
        onKeyDown={handleOnKeyPress}
      />
    </div>
  )
}
