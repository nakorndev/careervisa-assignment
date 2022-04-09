import { program, createCommand } from 'commander'
import packageJson from '../package.json'
import splitting from './splitting/splitting'

const splittingCommand = createCommand('splitting')
  .description('จำนวนเงินทอน')
  .argument('<amount>', 'จำนวนเงิน')
  .option('-l --locale <string>', 'ภาษาที่จะแสดงผล', 'th-TH')
  .action(splitting)

program
  .version(packageJson.version)
  .addCommand(splittingCommand)
  .parse()
