function getLongestEqualString (stringA: string, stringB: string): string {
  const matches = []
  for (let i = 0; i < stringA.length; i++) {
    let currentLongest = stringA[i]
    let count = 0
    while (stringB.includes(currentLongest)) {
      const nextChar = stringA[i + ++count]
      if (!nextChar) {
        break
      }
      currentLongest += nextChar
    }
    matches.push(currentLongest.slice(0, -1))
  }
  return matches.reduce((prev, curr) => prev.length > curr.length ? prev : curr)
}

export default getLongestEqualString
