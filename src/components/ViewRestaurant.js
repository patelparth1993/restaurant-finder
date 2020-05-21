import React from "react";

import "./style/ViewRestaurant.scss";

export const ViewRestaurant = (props) => {
  let priceFilter = false;
  let resultCount = 0;
  if (+props.filterByPrice !== 0) {
    priceFilter = true;
  }
  return (
    <div data-testid='view-restaurant' className='view-restaurant-comp'>
      {props.resList.map((eachRes) => {
        let viewRes = false;
        viewRes =
          (eachRes.name.toLowerCase().indexOf(props.search) !== -1 ||
            eachRes.address.toLowerCase().indexOf(props.search) !== -1 ||
            eachRes.area.toLowerCase().indexOf(props.search) !== -1) &&
          (priceFilter ? eachRes.price === +props.filterByPrice : true);
        if (viewRes) {
          resultCount++;
          return (
            <div key={eachRes.id} className='restaurant-cards'>
              <strong>Name: </strong>
              {eachRes.name}
              <br />
              <strong>Address: </strong>
              {eachRes.address}
              <br />
              <strong>Area: </strong>
              {eachRes.area}
              <br />
              <strong>Price: </strong>
              {eachRes.price}
              <br />
            </div>
          );
        }
        return null;
      })}
      {resultCount === 0 && props.resList.length > 0 && (
        <div className='no-res-found'>No Restaurants Found</div>
      )}
    </div>
  );
};
ViewRestaurant.defaultProps = {
  resList: [],
  search: "",
  filterByPrice: 0,
};
