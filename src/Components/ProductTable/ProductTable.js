import React from 'react';
import './ProductTable.css';

function ProductTable({ sales }) {
  console.log(sales)
  return (
    <div className="product-table-container">
      <table>
        <thead>
          <tr>
            <th>Week Ending</th>
            <th>Retail Sales</th>
            <th>Wholesale Sales</th>
            <th>Units Sold</th>
            <th>Retailer Margin</th>
          </tr>
        </thead>
        <tbody>
          {sales.map((sale) => {
            return (
              <tr>
                <td>{sale.weekEnding}</td>
                <td>${(sale.retailSales).toLocaleString('en')}</td>
                <td>${(sale.wholesaleSales).toLocaleString('en')}</td>
                <td>{sale.unitsSold}</td>
                <td>${(sale.retailerMargin).toLocaleString('en')}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default ProductTable;