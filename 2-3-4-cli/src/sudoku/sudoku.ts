import ora from 'ora-classic'
import Table from 'cli-table3'
import generateSudoku from './lib/generateSudoku'

const allowSizes = [4, 9, 16]

async function sudoku (size: string) {
  const loading = ora('กำลังสุ่มตาราง').start()
  const sizeAsNumber = Number(size)
  if (!allowSizes.includes(sizeAsNumber)) {
    throw new Error(`ไม่พบหมายเลขที่ตรงกับ ${allowSizes.join(', ')}`)
  }
  try {
    const sudokuTable = await generateSudoku(sizeAsNumber as 4 | 9 | 16)
    const table = new Table()
    table.push(...sudokuTable)
    loading.stop()
    console.log(table.toString())
  } catch (error) {
    loading.fail(error as any)
  }
}

export default sudoku
