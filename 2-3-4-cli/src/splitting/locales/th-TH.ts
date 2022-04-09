import { CashTypes } from '../lib/splitChanges'
import { Locale, LocaleOutput } from './_interface'

const cashTypes: CashTypes = [
  { type: 'banknote', amount: 1000 },
  { type: 'banknote', amount: 500 },
  { type: 'banknote', amount: 100 },
  { type: 'banknote', amount: 50 },
  { type: 'banknote', amount: 20 },
  { type: 'coin', amount: 10 },
  { type: 'coin', amount: 5 },
  { type: 'coin', amount: 2 },
  { type: 'coin', amount: 1 },
  { type: 'coin', amount: 0.5 },
  { type: 'coin', amount: 0.25 }
]

function translateType (type: string): string {
  switch (type) {
    case 'banknote': return 'แบงค์'
    case 'coin': return 'เหรียญ'
    default: return 'undefined'
  }
}

function translateTypePronoun (type: string): string {
  switch (type) {
    case 'banknote': return 'ใบ'
    case 'coin': return 'เหรียญ'
    default: return 'undefined'
  }
}

const output: LocaleOutput = (splitted) => {
  const texts: string[][] = []
  for (const split of splitted) {
    texts.push([
      translateType(split.type),
      'THB',
      split.amount.toFixed(2),
      'จำนวน',
      `${split.quantity} ${translateTypePronoun(split.type)}`,
      'เป็นเงิน THB',
      split.total.toFixed(2),
      'คงเหลือ THB',
      split.amountLeft.toFixed(2)
    ])
  }
  return Promise.resolve(texts)
}

const locale: Locale = {
  cashTypes,
  output
}

export default locale
