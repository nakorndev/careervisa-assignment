import getLongestEqualString from './getLongestEqualString'

describe('getLongestEqualString', () => {
  test.each([
    ['abcdefghijk', 'aaadefghaaa', 'defgh'],
    ['12313234567123121234562312', '99810291231299', '12312'],
    ['AAAACTGCTACCGGT', 'CTGAATCTACTGCTATTGCAA', 'ACTGCTA']
  ])('Should be able to get longest match string', (a, b, expected) => {
    const actual = getLongestEqualString(a, b)
    expect(actual).toBe(expected)
  })
})
