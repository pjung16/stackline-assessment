import { createSlice } from '@reduxjs/toolkit';
import entries from './Webdev_data2.json';

export const dataSlice = createSlice({
  name: 'data',
  initialState: {
    entries: entries,
  },
  reducers: {
    sortByWeek: state => {
      const newState = state.entries.slice();
      newState[0].sales.sort(function(a,b){
        return new Date(a.weekEnding) - new Date(b.weekEnding)
      });
      state.entries = newState
    },
    sortByWeekReverse: (state) => {
      const newState = state.entries.slice();
      newState[0].sales.sort(function(a,b){
        return new Date(b.weekEnding) - new Date(a.weekEnding)
      });
      state.entries = newState;
    },
    sortByRetailSales: (state) => {
      const newState = state.entries.slice();
      newState[0].sales.sort(function(a,b){
        return new Date(a.retailSales) - new Date(b.retailSales)
      });
      state.entries = newState
    },
    sortByRetailSalesReverse: (state) => {
      const newState = state.entries.slice();
      newState[0].sales.sort(function(a,b){
        return new Date(b.retailSales) - new Date(a.retailSales)
      });
      state.entries = newState
    },
    sortByWholesaleSales: (state) => {
      const newState = state.entries.slice();
      newState[0].sales.sort(function(a,b){
        return new Date(a.wholesaleSales) - new Date(b.wholesaleSales)
      });
      state.entries = newState
    },
    sortByWholesaleSalesReverse: (state) => {
      const newState = state.entries.slice();
      newState[0].sales.sort(function(a,b){
        return new Date(b.wholesaleSales) - new Date(a.wholesaleSales)
      });
      state.entries = newState
    },
    sortByUnitsSold: (state) => {
      const newState = state.entries.slice();
      newState[0].sales.sort(function(a,b){
        return new Date(a.unitsSold) - new Date(b.unitsSold)
      });
      state.entries = newState
    },
    sortByUnitsSoldReverse: (state) => {
      const newState = state.entries.slice();
      newState[0].sales.sort(function(a,b){
        return new Date(b.unitsSold) - new Date(a.unitsSold)
      });
      state.entries = newState
    },
    sortByRetailerMargin: (state) => {
      const newState = state.entries.slice();
      newState[0].sales.sort(function(a,b){
        return new Date(a.retailerMargin) - new Date(b.retailerMargin)
      });
      state.entries = newState
    },
    sortByRetailerMarginReverse: (state) => {
      const newState = state.entries.slice();
      newState[0].sales.sort(function(a,b){
        return new Date(b.retailerMargin) - new Date(a.retailerMargin)
      });
      state.entries = newState
    },
  },
});

export const { 
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
} = dataSlice.actions;

export const selectEntries = state => state.data.entries;

export default dataSlice.reducer;