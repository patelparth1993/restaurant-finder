import React, { Component } from "react";
import { connect } from "react-redux";

import { ViewRestaurant } from "./ViewRestaurant";
import { getRestaurants } from "../redux/actions/getRestaurant";
import "./style/Restaurant.scss";

class Restaurant extends Component {
  constructor(props) {
    super(props);
    this.state = {
      city: "",
      search: "",
      filterByPrice: 0,
      error: "",
    };
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  getRestaurant = (e) => {
    if (e.target.className === "btn disabled") {
      this.setState({
        error: "Enter The City",
      });
    } else {
      this.setState({
        error: "",
      });
      this.props.getRestaurants(this.state.city);
    }
  };

  render() {
    const { city, search, filterByPrice, error } = this.state;
    return (
      <div className='container'>
        <div className='e1'>{error}</div>
        <div className='c1'>
          <input
            type='text'
            name='city'
            value={city}
            onChange={this.handleChange}
            placeholder='City'
          />
          <button
            onClick={this.getRestaurant}
            className={city ? "btn" : "btn disabled"}
          >
            Get Restaurant
          </button>
        </div>
        <div className='c2' hidden={this.props.restaurantsList.length === 0}>
          Refine:
          <input
            type='text'
            name='search'
            value={search}
            onChange={this.handleChange}
            placeholder='Name, Street Or Area'
          />
          <select
            className='select-filter'
            name='filterByPrice'
            value={filterByPrice}
            onChange={this.handleChange}
          >
            <option value='0' disabled hidden>
              By Price
            </option>
            <option value='1'>1</option>
            <option value='2'>2</option>
            <option value='3'>3</option>
            <option value='4'>4</option>
            <option value='0'>All</option>
          </select>
        </div>

        <ViewRestaurant
          resList={this.props.restaurantsList}
          search={search.toLowerCase()}
          filterByPrice={filterByPrice}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  restaurantsList: state.restaurants,
});
export default connect(mapStateToProps, { getRestaurants })(Restaurant);
