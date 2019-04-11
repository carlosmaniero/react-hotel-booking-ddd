import { IApartment } from './Apartment'
import { Regular } from './Regular'
import { Roof } from './Roof'
import { Suite } from './Suite'

export interface IRoom {
    readonly name: string
    readonly regularPricing: number
    readonly apartments: IApartment[]
}

export enum RoomType {
    Regular = 'REGULAR',
    Roof = 'ROOF',
    Suite = 'SUITE',
}

export const roomOf = (roomType: RoomType): IRoom => {
    switch (roomType) {
        case RoomType.Regular:
            return new Regular()
        case RoomType.Roof:
            return new Roof()
        case RoomType.Suite:
            return new Suite()
    }
}