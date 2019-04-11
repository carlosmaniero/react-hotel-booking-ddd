import { Suite } from './Suite'

describe('Suite', () => {
    it('returns the suite name', () => {
        expect(new Suite().name).toBe('Suite')
    })

    it('returns the Suite price', () => {
        expect(new Suite().regularPricing).toBe(515)
    })

    it('returns the Suite appartments list', () => {
        expect(new Suite().apartments).toHaveLength(5)

        expect(new Suite().apartments).toContainEqual({number: 2})
        expect(new Suite().apartments).toContainEqual({number: 3})
        expect(new Suite().apartments).toContainEqual({number: 4})
        expect(new Suite().apartments).toContainEqual({number: 5})
        expect(new Suite().apartments).toContainEqual({number: 6})
    })
})