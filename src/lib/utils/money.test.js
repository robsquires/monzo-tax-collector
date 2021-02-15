const money = require('./money')

describe('parse', () => {
    test('returns valid amounts', () => {
        expect(money.parse(1)).toBe(1.0)
        expect(money.parse(0.99)).toBe(0.99)
        expect(money.parse(1.1)).toBe(1.1)
    })

    test('rounds to nearest pence', () => {
        expect(money.parse(0.999)).toBe(1)
        expect(money.parse(1.199)).toBe(1.2)
    })

    test('throws for non-numeric', () => {
        expect(() => money.parse('a')).toThrow()
        expect(() => money.parse('1')).toThrow()
        expect(() => money.parse({})).toThrow()
    })

    test('throws for negative numbers', () => {
        expect(() => money.parse(-1)).toThrow()
    })
})

describe('Money', () => {
    test('fromPence', () => {
        console.log(money.Money)
        const onePound = money.Money.fromPence(101)
        expect(onePound.value).toBe(101)
    })
})
