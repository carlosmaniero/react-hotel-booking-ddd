import { IApartment } from './Apartment'
import { IRoom } from './RoomType'

export class Roof implements IRoom {
    public readonly name: string = 'Roof'
    public readonly regularPricing: number = 835
    public readonly apartments: IApartment[] = [{number: 1}]
}