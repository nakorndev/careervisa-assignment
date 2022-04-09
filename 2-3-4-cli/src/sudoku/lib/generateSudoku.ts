import { clone, range, sample } from 'lodash'

function generateSudoku (size: 4 | 9 | 16): string[][] {
  const table: string[][] = []
  const set = range(size === 16 ? 0 : 1, size === 16 ? size : size + 1).map(v => v.toString(16).toUpperCase())
  for (let i = 0; i < size; i++) {
    let row: string[] = []
    let rowRest = clone(set)
    while (row.includes('undefined') || row.length === 0) {
      if (row.includes('undefined')) {
        row = []
        rowRest = clone(set)
      }
      for (let j = 0; j < size; j++) {
        const top: string[] = []
        if (i > 0) {
          for (let k = 0; k < i; k++) {
            top.push(table[k][j])
          }
        }
        const selectSet = String(sample(rowRest.filter(v => !top.includes(v))))
        rowRest.splice(rowRest.findIndex(v => v === selectSet), 1)
        row.push(selectSet)
      }
    }
    table.push(row)
  }
  return table
}

export default generateSudoku
