function Primes() {
  let thePrimes = []
  let thePrimePositions = new Set(thePrimes)

  const updatePrimes = primes => {
    thePrimes = primes
    thePrimesPositions = new Set(thePrimes)
  }

  const shortCircuitPrimes = until => {
    const primesUntil = []
    for (let i = 0; ; i++) {
      if (thePrimes[i] > until) {
        return primesUntil
      }
      primesUntil.push(thePrimes[i])
    }
  }

  const sieveLoop = n => {
    const list = buildListFromLastPrime(n)
    const result = []
    let copy = [...thePrimes, ...list]
    for (let i = 0; i < result.length; i++) {
      copy = copy.filter(x => x % result[i] !== 0)
    }
    for (let i = 0; ; i++) {
      const first = copy.shift()
      if (!first) return result
      result.push(first)
      copy = copy.filter(x => x % first !== 0)
    }
  }

  const buildListFromLastPrime = n => {
    const tpl = thePrimes.length
    const lastPrime = thePrimes[tpl - 1]
    const len = n - (lastPrime ? tpl + 1 : 1)
    return new Array(len).fill(null).map((x, i) => i + 2 + tpl)
  }

  const getPrimesTill = n => {
    const tpl = thePrimes.length
    const lastPrime = thePrimes[tpl - 1]
    if (lastPrime > n) {
      return shortCircuitPrimes(n)
    }

    const primes = sieveLoop(n)
    if (primes.length - thePrimes.length) {
      updatePrimes(primes)
    }
    return primes
  }

  const getFirstPrimes = n => {
    let count = 0
    do {
      // console.log(count, thePrimes.length)
      if (thePrimes.length >= n) {
        return thePrimes.slice(0, n)
      }
      getPrimesTill(n + ++count * n)
    } while (true)
  }

  return { getPrimesTill, getFirstPrimes, thePrimes }
}

const { getPrimesTill, getFirstPrimes, thePrimes } = Primes()

try {
  module.exports = { getFirstPrimes, getPrimesTill, thePrimes }
} catch (e) {
  console.log('in browser')
}
