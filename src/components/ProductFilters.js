import React from 'react'

export const ProductFilters = (props) => {

  const { minPrice, maxPrice } = props;

  const onPriceChange = (e) => {
    // TODO: implement handler
    const { name, value } = e.target;
    props.onPriceChange(name, value === '' ? '': parseFloat(value));
  }

  // TODO: bind handlers and props
  return (
    <div>
      <label htmlFor="minPrice">Min Price:</label>
      <input
        type="number"
        id="minPrice"
        name="minPrice"
        placeholder="Min price..."
        value={minPrice}
        onChange={onPriceChange}
         />
      <label htmlFor="maxPrice">Max Price:</label>
      <input
        type="number"
        id="maxPrice"
        name="maxPrice"
        placeholder="Max price..."
        value={maxPrice}
        onChange={onPriceChange}
         />
    </div>
  )
}
