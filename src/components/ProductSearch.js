import React, { useState, useEffect, useCallback} from 'react'

import '../styles/Search.css';
import { ColumnToggle } from './ColumnToggle';
import { ProductTable } from './ProductTable';
import { ProductFilters } from './ProductFilters';

export const ProductSearch = (props) => {
  
  const { products } = props;
  const [price, setPrice] = useState({ minPrice: '', maxPrice: '' });

  const [filteredItems, setFilteredItems] = useState(products);
  
  useEffect(() => {
    setFilteredItems(products);
  }, [products]);

  const [toggles, setToggles] = useState({
    id: true,
    name: true,
    department: true,
    price: true,
    currency: true,
  });

  const onPriceChange = (name, value) => {
    // TODO: implement price change handler
    setPrice(prevPrice => ({
      ...prevPrice,
      [name]: value === '' ? '' : parseFloat(value)
    }));
  }

  const onToggle = (name, checked) => {
    // TODO: implement column toggle handler
    setToggles(prevToggles => ({
      ...prevToggles,
      [name]: checked
    }));
  }

  const onFilter = useCallback(() => {
    const min = parseFloat(price.minPrice);
    const max = parseFloat(price.maxPrice);


     // TODO: implement handler for filtering products by price range
 
    if (!isNaN(min) && !isNaN(max)) {
      const filtered = products.filter(product =>
        product.price >= min && product.price <= max
      );
      setFilteredItems(filtered);
    } else if (!isNaN(min)) {
      const filtered = products.filter(product =>
        product.price >= min
      );
      setFilteredItems(filtered);
    } else if (!isNaN(max)) {
      const filtered = products.filter(product =>
        product.price <= max
      );
      setFilteredItems(filtered);
    } else {
      setFilteredItems(products);
    }

  }, [price, products]);

  useEffect(() => {
    onFilter();
  }, [onFilter]);


  // let filteredItems = [];
  return (
    <div className="Products">
      <ProductFilters
        minPrice={price.minPrice}
        maxPrice={price.maxPrice}
        onPriceChange={onPriceChange}
        onFilter={onFilter}
        />

      <ColumnToggle
        onToggle={onToggle}
        toggles={toggles} />

      <ProductTable
        products={filteredItems}
        columns={toggles} />
    </div>
  );
}

export default ProductSearch;
