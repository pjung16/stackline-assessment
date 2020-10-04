import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import {
  sortByWeek,
  sortByWeekReverse,
  sortByRetailSales,
  sortByRetailSalesReverse,
  sortByWholesaleSales,
  sortByWholesaleSalesReverse,
  sortByUnitsSold,
  sortByUnitsSoldReverse,
  sortByRetailerMargin,
  sortByRetailerMarginReverse,
} from '../../dataSlice';
import './ProductTable.css';

function ProductTable({ sales }) {
  console.log(sales)
  const dispatch = useDispatch();
  const [currSort, setCurrSort] = useState('Week Ending');
  const [isReverse, setIsReverse] = useState(false)

  return (
    <div className="product-table-container">
      <table>
        <thead>
          <tr>
            <th 
              onClick={() => {
                if (currSort !== 'Week Ending') {
                  setCurrSort('Week Ending')
                  setIsReverse(false)
                  dispatch(sortByWeekReverse())
                } else {
                  isReverse ? dispatch(sortByWeek()) : dispatch(sortByWeekReverse())
                  setIsReverse(!isReverse)
                }
              }}
              className={currSort === 'Week Ending' ? "selected-column" : null}
            >
              Week Ending <div className={isReverse && currSort === 'Week Ending' ? "sort-arrow-reverse" : "sort-arrow"}>^</div>
            </th>
            <th 
              onClick={() => {
                if (currSort !== 'Retail Sales') {
                  setCurrSort('Retail Sales')
                  setIsReverse(false)
                  dispatch(sortByRetailSalesReverse())
                } else {
                  isReverse ? dispatch(sortByRetailSales()) : dispatch(sortByRetailSalesReverse())
                  setIsReverse(!isReverse)
                }
              }}
              className={currSort === 'Retail Sales' ? "selected-column" : null}
            >
              Retail Sales <div className={isReverse && currSort === 'Retail Sales' ? "sort-arrow-reverse" : "sort-arrow"}>^</div>
            </th>
            <th 
              onClick={() => {
                if (currSort !== 'Wholesale Sales') {
                  setCurrSort('Wholesale Sales')
                  setIsReverse(false)
                  dispatch(sortByWholesaleSalesReverse())
                } else {
                  isReverse ? dispatch(sortByWholesaleSales()) : dispatch(sortByWholesaleSalesReverse())
                  setIsReverse(!isReverse)
                }
              }}
              className={currSort === 'Wholesale Sales' ? "selected-column" : null}
            >
              Wholesale Sales <div className={isReverse && currSort === 'Wholesale Sales' ? "sort-arrow-reverse" : "sort-arrow"}>^</div>
            </th>
            <th 
              onClick={() => {
                if (currSort !== 'Units Sold') {
                  setCurrSort('Units Sold')
                  setIsReverse(false)
                  dispatch(sortByUnitsSoldReverse())
                } else {
                  isReverse ? dispatch(sortByUnitsSold()) : dispatch(sortByUnitsSoldReverse())
                  setIsReverse(!isReverse)
                }
              }}
              className={currSort === 'Units Sold' ? "selected-column" : null}
            >
              Units Sold <div className={isReverse && currSort === 'Units Sold' ? "sort-arrow-reverse" : "sort-arrow"}>^</div>
            </th>
            <th 
              onClick={() => {
                if (currSort !== 'Retailer Margin') {
                  setCurrSort('Retailer Margin')
                  setIsReverse(false)
                  dispatch(sortByRetailerMarginReverse())
                } else {
                  isReverse ? dispatch(sortByRetailerMargin()) : dispatch(sortByRetailerMarginReverse())
                  setIsReverse(!isReverse)
                }
              }}
              className={currSort === 'Retailer Margin' ? "selected-column" : null}
            >
              Retailer Margin <div className={isReverse && currSort === 'Retailer Margin' ? "sort-arrow-reverse" : "sort-arrow"}>^</div>
            </th>
          </tr>
        </thead>
        <tbody>
          {sales.map((sale) => {
            return (
              <tr key={sale.weekEnding}>
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