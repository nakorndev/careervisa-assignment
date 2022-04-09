import path from 'path'
import { Locale } from '../locales/_interface'
import splitChanges, { SplitTypes } from '../lib/splittChanges'

interface CLIOptions {
  locale: string
}

function mapStringText (texts: string[][]) {
  return texts.map(text => text.join('\t')).join('\n')
}

function crossCheck (splitted: SplitTypes): boolean {
  return splitted[splitted.length - 1].amountLeft !== 0
}

async function getAmount (amount: string, options: CLIOptions): Promise<void> {
  const amountAsNumber = Number(amount)
  if (Number.isNaN(amountAsNumber)) {
    throw new Error('amount ที่ระบุไม่ใช่ตัวเลข')
  }
  const localePath = path.join(__dirname, '../locales', `${options.locale}.js`)
  const locale = (await import(localePath)).default as Locale
  const splitted = splitChanges(amountAsNumber, locale.cashTypes)
  const texts = await locale.output(splitted)
  console.log(mapStringText(texts))
  console.log(`cross-check: ${crossCheck(splitted)}`)
}

export default getAmount
