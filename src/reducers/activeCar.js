const defaultState = {
    selected: [],
}
export default function activeCar  (state = defaultState, action)  {
    switch(action.type) {
    case 'CAR_SELECTED':
    return action.payload
    default:
        return state

    }
}