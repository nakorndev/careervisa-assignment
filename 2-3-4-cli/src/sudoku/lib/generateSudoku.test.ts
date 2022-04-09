import { uniq } from 'lodash'
import generateSudoku from './generateSudoku'

describe('generateSudoku', () => {
  test.each([4, 9, 16])('Entry of table should be unique for 100 times', async (size) => {
    for (let count = 0; count < 100; count++) {
      const table = await generateSudoku(size as 4 | 9 | 16)
      for (const row of table) {
        expect(uniq(row).length).toBe(row.length)
      }
      for (let i = 0; i < table.length; i++) {
        const col = []
        for (let j = 0; j < table.length; j++) {
          col.push(table[j][i])
        }
        expect(uniq(col).length).toBe(col.length)
      }
    }
  })
})
