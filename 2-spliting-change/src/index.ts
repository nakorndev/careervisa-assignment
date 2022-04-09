import { program } from 'commander'
import packageJson from '../package.json'
import getAmount from './commands/getAmount'

program
  .description(packageJson.description)
  .version(packageJson.version)
  .argument('<amount>', 'จำนวนเงิน')
  .option('-l --locale <string>', 'ภาษาที่จะแสดงผล', 'th-TH')
  .action(getAmount)
  .parse()
