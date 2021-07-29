import React, {Component} from 'react'
import { connect } from 'react-redux'

class Details extends Component {
    render () {
        if (!this.props.car) {
            return (<p>Select a car...</p>)
        }
        return (
            <div>
                <h2>{this.props.car.name}</h2>
                <img src={this.props.car.img} />
                <p> Weihgt:{this.props.car.weight}, Speed:{this.props.car.speed}</p>
            </div>
        )
    }
}

function mapStateToProps (state) {
    return {
        car: state.active
    }
}
export default connect (mapStateToProps)(Details) 