import { cn } from '@/utils'
import { useState } from 'react'
import { Expression } from './Expression.tsx'
import { Result } from '../types'
import { ListResult } from './ListResult.tsx'

export const Exam = () => {
  const [results, setResults] = useState<Result[]>([])

  const handleSubmitResult = (result: Result) => {
    const nextResult = [...results]
    nextResult.push(result)
    setResults(nextResult)
  }

  return (
    <div className={cn('grid grid-cols-3 mt-10')}>
      <div className="col-span-2 justify-self-center">
        <div className="text-xl mb-4">Test - {results.length + 1}</div>
        <Expression handleSubmitResult={handleSubmitResult} />
      </div>
      <div>
        <ListResult results={results} />
      </div>
    </div>
  )
}
