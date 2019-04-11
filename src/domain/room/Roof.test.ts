import { Roof } from './Roof'

describe('Roof', () => {
    it('returns the roof name', () => {
        expect(new Roof().name).toBe('Roof')
    })

    it('returns the roof price', () => {
        expect(new Roof().regularPricing).toBe(835)
    })

    it('returns the roof appartments list', () => {
        expect(new Roof().apartments).toEqual([{number: 1}])
    })
})