import getLongestEqualString from './lib/getLongestEqualString'

function dna (stringA: string, stringB: string): void {
  const normalized = [stringA.trim(), stringB.trim()]
  if (normalized.filter(v => v.search(/^[ACGT]+$/) === -1).length > 0) {
    throw new Error('ตัวอักษร DNA ไม่ได้ประกอบไปด้วย A, C, G, T ที่ถูกต้อง')
  }
  const result = getLongestEqualString(normalized[0], normalized[1])
  console.log('ผลลัพธ์ที่ยาวที่สุด', result)
}

export default dna
