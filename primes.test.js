const { getPrimesTill, getFirstPrimes } = require('./primes')

describe('Testing getPrimesTill', () => {
  describe('small numbers', () => {
    test('primes till 10', () => {
      const result = getPrimesTill(10)
      expect(result).toEqual(primesTo10)
    })
    test('primes till 20', () => {
      const result = getPrimesTill(20)
      expect(result).toEqual(primesTo20)
    })
    test('primes till 50', () => {
      const result = getPrimesTill(50)
      expect(result).toEqual(primesTo50)
    })
    test('primes till 100', () => {
      const result = getPrimesTill(100)
      expect(result).toEqual(primesTo100)
    })
    test('primes till 1000', () => {
      const result = getPrimesTill(1000)
      expect(result).toEqual(primesTo1000)
    })
    test('primes till 10000', () => {
      const result = getPrimesTill(10000)
      expect(result.length).toEqual(1229)
    })
  })

  describe('getPrimesTill prime number should end on that number', () => {
    test('getPrimesTill 461', () => {
      const result = getPrimesTill(461)
      expect(result[result.length - 1]).toEqual(461)
    })

    test('getPrimesTill 7919', () => {
      const result = getPrimesTill(7919)
      expect(result[result.length - 1]).toEqual(7919)
    })

    test('getPrimesTill 99991', () => {
      const result = getPrimesTill(99991)
      expect(result[result.length - 1]).toEqual(99991)
    })
  })

  describe('Very Large Numbers', () => {
    test('very large numbers... (100.000)', () => {
      const result = getPrimesTill(100000)
      expect(result.length).toEqual(length100k)
      expect(result[result.length - 1]).toEqual(lastPrime100k)
    })
    test('very large numbers... (250.000)', () => {
      const result = getPrimesTill(250000)
      expect(result.length).toEqual(length250k)
      expect(result[result.length - 1]).toEqual(lastPrime250k)
    })
    test('takes till 200.000 after having till 250.000', () => {
      const result = getPrimesTill(200000)
      expect(result.length).toEqual(length200k)
      expect(result[result.length - 1]).toEqual(lastPrime200k)
    })
    test('very large numbers... (500.000)', () => {
      const result = getPrimesTill(500000)
      expect(result.length).toEqual(length500k)
      expect(result[result.length - 1]).toEqual(lastPrime500k)
    })
    test('very large numbers... (1.000.000)', () => {
      const result = getPrimesTill(1000000)
      expect(result.length).toEqual(length1M)
      expect(result[result.length - 1]).toEqual(lastPrime1M)
    })
  })
})

describe('Testing getFirstPrimes', () => {
  describe('if the primes already found', () => {
    test('get first 1.000 primes', () => {
      const result = getFirstPrimes(1000)
      expect(result.length).toBe(1000)
      expect(result[result.length - 1]).toBe(lastPrime1k)
    })
    test('get first 10.000 primes', () => {
      const result = getFirstPrimes(10000)
      expect(result.length).toBe(10000)
      expect(result[result.length - 1]).toBe(lastPrime10k)
    })
    test('get first 20.000 primes', () => {
      const result = getFirstPrimes(20000)
      expect(result.length).toBe(20000)
      expect(result[result.length - 1]).toBe(lastPrime20k)
    })
  })
})

const primesTo10 = [2, 3, 5, 7]
const primesTo20 = [2, 3, 5, 7, 11, 13, 17, 19]
const primesTo50 = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47]
const primesTo100 = [
  2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71,
  73, 79, 83, 89, 97,
]
const primesTo1000 = [
  2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71,
  73, 79, 83, 89, 97, 101, 103, 107, 109, 113, 127, 131, 137, 139, 149, 151,
  157, 163, 167, 173, 179, 181, 191, 193, 197, 199, 211, 223, 227, 229, 233,
  239, 241, 251, 257, 263, 269, 271, 277, 281, 283, 293, 307, 311, 313, 317,
  331, 337, 347, 349, 353, 359, 367, 373, 379, 383, 389, 397, 401, 409, 419,
  421, 431, 433, 439, 443, 449, 457, 461, 463, 467, 479, 487, 491, 499, 503,
  509, 521, 523, 541, 547, 557, 563, 569, 571, 577, 587, 593, 599, 601, 607,
  613, 617, 619, 631, 641, 643, 647, 653, 659, 661, 673, 677, 683, 691, 701,
  709, 719, 727, 733, 739, 743, 751, 757, 761, 769, 773, 787, 797, 809, 811,
  821, 823, 827, 829, 839, 853, 857, 859, 863, 877, 881, 883, 887, 907, 911,
  919, 929, 937, 941, 947, 953, 967, 971, 977, 983, 991, 997,
]

const lastPrime1k = 7919
const lastPrime10k = 104729
const lastPrime20k = 224737
const lastPrime100k = 99991
const length100k = 9592
const lastPrime200k = 199999
const length200k = 17984
const lastPrime250k = 249989
const length250k = 22044
const lastPrime500k = 499979
const length500k = 41538
const lastPrime1M = 999983
const length1M = 78498
