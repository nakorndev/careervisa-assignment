import Table from 'cli-table3'
import generateSudoku from './lib/generateSudoku'

const allowSizes = [4, 9, 16]

function sudoku (size: string) {
  const sizeAsNumber = Number(size)
  if (!allowSizes.includes(sizeAsNumber)) {
    throw new Error(`ไม่พบหมายเลขที่ตรงกับ ${allowSizes.join(', ')}`)
  }
  const sudokuTable = generateSudoku(sizeAsNumber as 4 | 9 | 16)
  const table = new Table()
  table.push(...sudokuTable)
  console.log(table.toString())
}

export default sudoku
