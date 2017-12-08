import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchCars } from '../actions';
import Sidebar from '../components/sidebar';

class CarsIndex extends Component {
  componentWillMount() {
    this.props.fetchCars(this.props.garage);
  }

  render () {
    if (this.props.cars.length === 0) {
      return [
        <Sidebar key="sidebar" garage={this.props.garage}>
          <Link to="/cars/new">Add Vehicle</Link>
        </Sidebar>,
        <div className="no-car" key="nocar">No Vehicles - Go add one</div>
      ];
    }
    return [
      <Sidebar key="sidebar" garage={this.props.garage}>
        <Link to="/cars/new">Add a Vehicle</Link>
      </Sidebar>,
      <div className="list-container" key="cars">
        {this.props.cars.map((car) => {
          return (
            <div key={car.id} className="car-smallad">
              <Link to={`/cars/${car.id}`} key={car.id} />
              <img className="car-logo" src="assets/images/car_icon.jpg" />
              <div className="car-details">
                <span>{car.brand} - {car.model}</span>
                <ul>
                  <li><strong>Owner:</strong> {car.owner}</li>
                </ul>
              </div>
            </div>
          );
        })}
      </div>
    ];
  }
};

function mapStateToProps(state) {
  return {
    cars: state.cars,
    garage: state.garage
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchCars }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(CarsIndex);
