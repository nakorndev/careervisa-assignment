import path from 'path'
import { Locale } from './locales/_interface'
import splitChanges, { SplitTypes } from './lib/splitChanges'

interface CLIOptions {
  locale: string
}

function mapStringText (texts: string[][]) {
  return texts.map(text => text.join('\t')).join('\n')
}

function getLastSplitted (splitted: SplitTypes) {
  const last = splitted[splitted.length - 1]
  return {
    splitted: last,
    crossCheck: last.amountLeft !== 0
  }
}

async function splitting (amount: string, options: CLIOptions): Promise<void> {
  const amountAsNumber = Number(amount)
  if (Number.isNaN(amountAsNumber)) {
    throw new Error('amount ที่ระบุไม่ใช่ตัวเลข')
  }
  const localePath = path.join(__dirname, './locales', `${options.locale}.js`)
  const locale = (await import(localePath)).default as Locale
  const splitted = splitChanges(amountAsNumber, locale.cashTypes)
  const texts = await locale.output(splitted)
  const last = getLastSplitted(splitted)
  console.log(`จำนวนเงิน: ${amount}`)
  console.log(mapStringText(texts))
  console.log(`รวมที่ต้องทอน: ${last.splitted.totalRecursive}`)
  console.log(`cross-check: ${last.crossCheck}`)
}

export default splitting
