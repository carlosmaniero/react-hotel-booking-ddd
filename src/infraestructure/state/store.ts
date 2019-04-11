import { createStore, Store } from 'redux'
import { IHotelMainState, initialState } from './HotelMainState'

export const createHotelStore = (): Store<IHotelMainState> =>
    createStore(() => initialState)