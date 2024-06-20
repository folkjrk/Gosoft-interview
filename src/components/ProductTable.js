import React from 'react'

export const ProductTable = (props) => {

  const {products, columns}= props;

   // TODO: display appropriate header
  const displayHeader = () => {
    const itemCount = products.length;
    return <strong>Products ({itemCount} items)</strong>;
  }

   // TODO: display only chosen columns
  const displayColumns = () => {
    return (
      <thead>
        <tr>
          {Object.keys(columns).map((columnName, index) => {
            if (columns[columnName]) {
              return <th key={index}>{columnName}</th>;
            }
            return null;
          })}
        </tr>
      </thead>
    );
  }

    // TODO: display products as new table rows
    const displayProducts = () => {
      return (
        <tbody>
        {products.map((product, index) => (
          <tr key={index}>
            {Object.keys(columns).map((columnName, index) => {
              if (columns[columnName]) {
                return <td key={index}>{product[columnName]}</td>;
              }
              return null;
            })}
          </tr>
        ))}
      </tbody>
      )
    }

  return (
    <div id="product-table">
      <header>
      {displayHeader()}
      </header>
      <table>
        {displayColumns()}
        {displayProducts()}
      </table>
    </div>
  )
}
