import { cn } from '@/utils'
import { Operator } from './Operator'
import { randomNumIn20, randomOperator } from '../utils'
import { ResultInput } from './ResultInput.tsx'
import { Result } from '../types'

type ExpressionProps = {
  handleSubmitResult: (result: Result) => void
}

const operations = {
  '-': (a: number, b: number) => a - b,
  '+': (a: number, b: number) => a + b,
}
export const Expression = ({ handleSubmitResult }: ExpressionProps) => {
  const numberA = randomNumIn20()
  const numberB = randomNumIn20()
  const operator = randomOperator(numberA, numberB)

  const submitResult = (value: number) => {
    handleSubmitResult({
      numA: numberA,
      numB: numberB,
      operator,
      result: value,
      isCorrect: operations[operator](numberA, numberB) === value,
    })
  }

  return (
    <div className={cn('flex gap-2')}>
      <Operator value={numberA} />
      <Operator value={operator} className="border-none" />
      <Operator value={numberB} />
      <Operator value={'='} className="border-none" />
      <ResultInput handleSubmitResult={submitResult} />
    </div>
  )
}
