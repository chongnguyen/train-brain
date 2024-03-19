export function randomNumber(min: number, max: number) {
  return Math.floor(Math.random() * (max - min)) + min
}

export function randomNumIn20() {
  return randomNumber(1, 20)
}

export function randomOperator(numA: number, numB: number) {
  const operators = ['+', '-'] as const
  if (numA < numB) {
    return operators[0]
  }

  const index = randomNumber(1, 4) % 2

  return operators[index]
}

export function isNumber(number: string): boolean {
  // Regex to match only digits (0-9) and optionally a minus sign (-) at the beginning
  const regex = /^\d+$/
  return regex.test(number)
}
