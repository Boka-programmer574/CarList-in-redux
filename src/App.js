import React from 'react'
import './App.css'
import CarsList from '../src/containers/listCars'
import Details from './containers/details'


const App = () => {
    return(
        <div className='car'>
            <h3>Cars</h3>
            <CarsList />
            <hr />
            <h3>Details</h3>
            <Details />
        </div>
    )
}
export default App