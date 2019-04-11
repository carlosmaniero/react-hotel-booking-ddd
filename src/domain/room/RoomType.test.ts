import { Regular } from './Regular'
import { Roof } from './Roof'
import { roomOf, RoomType } from './RoomType'
import { Suite } from './Suite'

describe('Room Type', () => {
    it('creates room based on room type', () => {
        expect(roomOf(RoomType.Regular)).toBeInstanceOf(Regular)
        expect(roomOf(RoomType.Roof)).toBeInstanceOf(Roof)
        expect(roomOf(RoomType.Suite)).toBeInstanceOf(Suite)
    })
})