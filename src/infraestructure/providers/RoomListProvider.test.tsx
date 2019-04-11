import { mount } from 'enzyme'
import * as React from 'react'
import { Provider } from 'react-redux'
import { Regular } from '../../domain/room/Regular'
import { Roof } from '../../domain/room/Roof'
import { Suite } from '../../domain/room/Suite'
import { createHotelStore } from '../state/store'
import { RoomListProvider } from './RoomListProvider'

describe('RoomListProvider', () => {
    it('provides the list of rooms', () => {
        const stub = jest.fn((rooms) => <div>Hello</div>)
        const provider = mount(<Provider store={createHotelStore()}>
            <RoomListProvider provideTo={stub} />
        </Provider>)

        expect(provider.html()).toBe('<div>Hello</div>')
        
        expect(stub.mock.calls).toHaveLength(1)
        expect(stub.mock.calls[0][0]).toEqual([
            new Regular(),
            new Roof(),
            new Suite()])
    })
})