import { ResultExpression } from './ResultExpression.tsx'
import { Result } from '../types'

type Props = {
  results: Result[]
}

function countCorrectResults(results: Result[]): number {
  return results.filter((e) => e.isCorrect).length
}

export const ListResult = ({ results }: Props) => {
  const totalCorrectResults = countCorrectResults(results)

  return (
    <div className="flex flex-col gap-3">
      <div className="text-3xl font-bold ">
        {`Results (${totalCorrectResults} / ${results.length})`}
      </div>
      {results.map((result, index) => {
        return (
          <div key={index} className="flex gap-4 items-center">
            <div>{index + 1})</div>
            <ResultExpression result={result} />
          </div>
        )
      })}
    </div>
  )
}
