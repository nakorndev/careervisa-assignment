import splitChanges from './splitChanges'
import locale from '../locales/th-TH'

describe('splitChanges', () => {
  test.each<any>([
    { input: 744768.37, 1000: 744, 500: 1, 100: 2, 50: 1, 20: 0, 10: 1, 5: 1, 2: 1, 1: 1, 0.5: 0, 0.25: 1 },
    { input: 1688.75, 1000: 1, 500: 1, 100: 1, 50: 1, 20: 1, 10: 1, 5: 1, 2: 1, 1: 1, 0.5: 1, 0.25: 1 }
  ])('Changes should be correct with preset', (params) => {
    const results = splitChanges(params.input, locale.cashTypes)
    for (const result of results) {
      expect(result.quantity).toBe(params[result.amount])
    }
  })
})
