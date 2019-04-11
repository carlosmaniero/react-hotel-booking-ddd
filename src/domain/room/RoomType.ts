import { IApartment } from './Apartment'

export interface IRoom {
    readonly name: string
    readonly regularPricing: number
    readonly apartments: IApartment[]
}