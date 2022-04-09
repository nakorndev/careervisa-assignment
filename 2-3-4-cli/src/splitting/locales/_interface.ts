import { CashTypes, SplitTypes } from '../lib/splitChanges'

export interface LocaleOutput {
  (splitted: SplitTypes): Promise<string[][]>
}

export interface Locale {
  cashTypes: CashTypes
  output: LocaleOutput
}
