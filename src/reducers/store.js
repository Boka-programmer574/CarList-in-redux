import { createStore } from "redux";
import { combineReducers } from "redux";
import  activeCar  from "./activeCar";
import CarsReducers from "./cars";


const allReducers = combineReducers({
    cars: CarsReducers,
    active: activeCar
})

const store = createStore(allReducers)

export default store
// const store = createStore()

// export default store 


