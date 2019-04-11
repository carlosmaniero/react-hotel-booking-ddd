import { apartmentRange, IApartment } from './Apartment'
import { IRoom } from './RoomType'

export class Regular implements IRoom {
    public name: string = 'Regular'
    public regularPricing: number = 200
    public apartments: IApartment[] = apartmentRange(7, 31)
}