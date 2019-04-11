import { connect } from 'react-redux'
import { IRoom, roomOf } from '../../domain/room/RoomType'
import { IHotelMainState } from '../state/HotelMainState'

interface IOwnProps {
    provideTo: (rooms: IRoom[]) => React.ReactElement
}

type Props = {
    rooms: IRoom[]
} & IOwnProps

export const RoomListProviderImpl = (props: Props) => 
    props.provideTo(props.rooms)

const mapStateToProps = ({rooms}: IHotelMainState, ownProps: IOwnProps): Props => ({
    ...ownProps,
    rooms: rooms.map(roomOf)
})

export const RoomListProvider = connect(mapStateToProps)(RoomListProviderImpl)