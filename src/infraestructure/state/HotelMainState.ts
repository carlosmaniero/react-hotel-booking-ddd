import { RoomType } from '../../domain/room/RoomType'

export interface IHotelMainState {
    readonly rooms: RoomType[]
}

export const initialState: IHotelMainState = {
    rooms: Object.values(RoomType)
}