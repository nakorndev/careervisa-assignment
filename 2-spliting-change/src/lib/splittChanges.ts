interface CashType {
  amount: number
  type: 'banknote' | 'coin'
}

export interface CashTypes extends Array<CashType> {}

interface SplitType extends CashType {
  quantity: number
  total: number
  totalRecursive: number
  amountLeft: number
}

export interface SplitTypes extends Array<SplitType> {}

function splitChanges (fullAmount: number, cashTypes: CashTypes): SplitTypes {
  const splitType: SplitTypes = []
  let amountLeft = fullAmount
  let totalRecursive = 0
  for (const cash of cashTypes) {
    const quantity = Math.floor(amountLeft / cash.amount)
    const total = quantity * cash.amount
    totalRecursive += total
    if (quantity >= 1) {
      amountLeft %= cash.amount
    }
    splitType.push({
      amount: cash.amount,
      type: cash.type,
      quantity,
      total,
      totalRecursive,
      amountLeft
    })
  }
  return splitType
}

export default splitChanges
