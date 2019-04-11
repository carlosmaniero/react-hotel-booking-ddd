import { apartmentRange, IApartment } from './Apartment'
import { IRoom } from './RoomType'

export class Suite implements IRoom {
    public name: string = 'Suite'
    public regularPricing: number = 515
    public apartments: IApartment[] = apartmentRange(2, 6)
}