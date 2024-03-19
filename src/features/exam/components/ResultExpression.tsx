import { cn } from '@/utils'
import { Operator } from './Operator'
import { Result } from '../types'

type ExpressionProps = {
  result: Result
}
export const ResultExpression = ({ result }: ExpressionProps) => {
  return (
    <div className={cn('flex gap-2')}>
      <Operator value={result.numA} />
      <Operator value={result.operator} className="border-none" />
      <Operator value={result.numB} />
      <Operator value={'='} className="border-none" />
      <Operator
        value={result.result}
        className={cn(
          'border-none',
          result.isCorrect ? 'text-green-500' : 'text-red-500'
        )}
      />
    </div>
  )
}
