import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { selectCar } from "../actions/index";
// import CarsReducers from "../reducers/cars";

class CarsList extends Component {
  showList() {
    return this.props.cars.map((cars) => {
      return (
         <li  onClick={() => this.props.selectCar(cars)} key={cars.id}>
          {cars.name}
          </li>
      );
    });
  }

  render() {
    return <ul>{this.showList()}</ul>;
  }
}
function mapStateToProps(state) {
  return {
    cars: state.cars,
  };
}

function machDispatchToProps(dispatch) {
  return bindActionCreators({ selectCar: selectCar }, dispatch);
}

export default connect(mapStateToProps, machDispatchToProps)(CarsList);
