import { Regular } from './Regular'

describe('Regular', () => {
    it('returns the Regular name', () => {
        expect(new Regular().name).toBe('Regular')
    })

    it('returns the Regular price', () => {
        expect(new Regular().regularPricing).toBe(200)
    })

    it('returns the Regular appartments list', () => {
        expect(new Regular().apartments).toHaveLength(25)
        
        for (let apartmentNumber = 7; apartmentNumber <= 31; apartmentNumber++) {
            expect(new Regular().apartments).toContainEqual({number: apartmentNumber})
        }
    })
})