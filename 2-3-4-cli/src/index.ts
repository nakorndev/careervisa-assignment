import { program, createCommand } from 'commander'
import packageJson from '../package.json'
import splitting from './splitting/splitting'
import sudoku from './sudoku/sudoku'
import dna from './dna/dna'

const splittingCommand = createCommand('splitting')
  .description('จำนวนเงินทอน')
  .argument('<amount>', 'จำนวนเงิน')
  .option('-l --locale <string>', 'ภาษาที่จะแสดงผล', 'th-TH')
  .action(splitting)

const sudokuCommand = createCommand('sudoku')
  .description('สร้างตารางซูโดกุ')
  .argument('<size>', 'ขนาดตาราง (ได้เฉพาะ 4, 9, 16)')
  .action(sudoku)

const dnaCommand = createCommand('dna')
  .description('หาคู่ DNA ที่ยาวที่สุด')
  .argument('<left>', 'คู่ซ้าย')
  .argument('<right>', 'คู่ขวา')
  .action(dna)

program
  .version(packageJson.version)
  .addCommand(splittingCommand)
  .addCommand(sudokuCommand)
  .addCommand(dnaCommand)
  .parse()
