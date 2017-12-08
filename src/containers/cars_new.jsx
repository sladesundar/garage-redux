import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';
import { createCar } from '../actions';
import Sidebar from '../components/sidebar';

class CarsNew extends Component {
  onSubmit = (values) => {
    this.props.createCar(this.props.garage, values, () => {
      this.props.history.push('/');
      return values;
    });
  }

  renderField(field) {
    return (
      <div className="form-group">
        <label>{field.label}</label>
        <input
          className="form-control"
          type={field.type}
          {...field.input}
        />
      </div>
    );
  }

  render () {
    return [
      <Sidebar key="sidebar" garage={this.props.garage}>
        <Link to="/">Back</Link>
      </Sidebar>,
      <div key="add" className="form-container">
        <form onSubmit={this.props.handleSubmit(this.onSubmit)}>
          <div className="form-group">
            <label htmlFor="InputBrand">Brand</label>
            <Field name="brand" type="text" placeholder="Mini Cooper" component={this.renderField} className="form-control" />
          </div>
          <div className="form-group">
            <label htmlFor="InputModel">Model</label>
            <Field name="model" type="text" placeholder="CountryMan" component={this.renderField} className="form-control" />
          </div>
          <div className="form-group">
            <label htmlFor="InputOwner">Owner of Vehicle</label>
            <Field name="owner" type="text" placeholder="Slade Sundar" component={this.renderField} className="form-control" />
          </div>
          <div className="form-group">
            <label htmlFor="InputPlate">Plate</label>
            <Field name="plate" type="text" placeholder="REACT007" component={this.renderField} className="form-control" />
          </div>
          <button type="submit">Add Vehicle</button>
        </form>
      </div>
    ];
  }
};

function mapStateToProps(state) {
  return {
    garage: state.garage
  };
}

export default reduxForm({
  form: 'newCarForm'
})(
  connect(mapStateToProps, { createCar })(CarsNew)
);

