// const assert = require('assert')

function Primes() {
  let thePrimes = [2]
  let thePrimePositions = new Set(thePrimes)

  const sieve = list => {
    if (list.length === 0) return []
    const first = list.shift()
    const filtered = list.filter(x => x % first !== 0)
    return [first, ...sieve(filtered)]
  }

  const fillPrimes = primes => {
    const diff = primes.length - thePrimes.length
    console.log('fillPrimes?', primes.length, thePrimes.length, diff)
    if (diff > 0) {
      console.log('diff > 0', diff, primes.length)
      for (let i = primes.length - diff; i < primes.length; i++) {
        thePrimes.push(primes[i])
        thePrimePositions.add(primes[i])
      }
    }
    console.log('finished fillPrimes', thePrimes.length, thePrimePositions)
  }

  const shortCircuitPrimes = until => {
    console.log('short circuiting')
    const primesUntil = []
    for (let i = 0; ; i++) {
      if (thePrimes[i] > until) {
        return primesUntil
      }
      primesUntil.push(thePrimes[i])
    }
  }

  return {
    getPrimesTill: n => {
      const tpl = thePrimes.length
      const lastPrime = thePrimes[tpl - 1]
      console.log(lastPrime, n, lastPrime > n)
      if (lastPrime > n) {
        return shortCircuitPrimes(n)
      }
      const list = [
        ...thePrimes,
        ...new Array(n - lastPrime).fill(null).map((x, i) => i + 1 + tpl),
      ]
      console.log({ list })
      const primes = sieve(list)
      setTimeout(() => fillPrimes(primes), 0)
      return primes
    },
    getFirstPrimes: n => {
      const list = new Array(n - 1).fill(null).map((x, i) => i + 2)
      return sieve(list)
    },
  }
}

const { getPrimesTill, getFirstPrimes } = Primes()
