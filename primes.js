// const assert = require('assert')

function Primes() {
  let thePrimes = []
  let thePrimePositions = new Set(thePrimes)

  const fillPrimes = primes => {
    const diff = primes.length - thePrimes.length
    // console.log('fillPrimes?', primes.length, thePrimes.length, diff)
    if (diff > 0) {
      // console.log('diff > 0', diff, primes.length)
      for (let i = primes.length - diff; i < primes.length; i++) {
        thePrimes.push(primes[i])
        thePrimePositions.add(primes[i])
      }
    }
    // console.log('finished fillPrimes', thePrimes.length, thePrimePositions)
  }

  const shortCircuitPrimes = until => {
    // console.log('short circuiting')
    const primesUntil = []
    for (let i = 0; ; i++) {
      if (thePrimes[i] > until) {
        return primesUntil
      }
      primesUntil.push(thePrimes[i])
    }
  }

  const sieve = list => {
    if (list.length === 0) return []
    const first = list.shift()
    const filtered = list.filter(x => x % first !== 0)
    return [first, ...sieve(filtered)]
  }

  const removeFirstPrimes = list => {
    const lastPrime = thePrimes[thePrimes.length - 1]
  }

  const sieveLoop = list => {
    let copy = [...list]
    const result = []
    for (let i = 0; ; i++) {
      const first = copy.shift()
      if (!first) return result
      result.push(first)
      copy = copy.filter(x => x % first !== 0)
      // console.log({ i })
      // console.log('result', result)
      // console.log('copy', copy)
      // console.log('------------')
    }
    return result
  }

  return {
    getPrimesTill: n => {
      const tpl = thePrimes.length
      const lastPrime = thePrimes[tpl - 1]
      if (lastPrime > n) {
        return shortCircuitPrimes(n)
      }
      const list = [
        ...thePrimes,
        ...new Array(n - (lastPrime || 1))
          .fill(null)
          .map((x, i) => i + 2 + tpl),
      ]
      // console.log({ list })
      const primes = sieveLoop(list)
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

try {
  module.exports = { getFirstPrimes, getPrimesTill }
} catch (e) {
  console.log('in browser')
}
