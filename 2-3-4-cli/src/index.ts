import { program, createCommand } from 'commander'
import packageJson from '../package.json'
import splitting from './splitting/splitting'
import sudoku from './sudoku/sudoku'

const splittingCommand = createCommand('splitting')
  .description('จำนวนเงินทอน')
  .argument('<amount>', 'จำนวนเงิน')
  .option('-l --locale <string>', 'ภาษาที่จะแสดงผล', 'th-TH')
  .action(splitting)

const sudokuCommand = createCommand('sudoku')
  .description('สร้างตารางซูโดกุ')
  .argument('<size>', 'ขนาดตาราง (ได้เฉพาะ 4, 9, 16)')
  .action(sudoku)

program
  .version(packageJson.version)
  .addCommand(splittingCommand)
  .addCommand(sudokuCommand)
  .parse()
