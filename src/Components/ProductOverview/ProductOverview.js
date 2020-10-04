import React, { useState } from 'react';
import Tag from '../Tag/Tag'
import './ProductOverview.css';

function ProductOverview({ data }) {
  const [selectedPage, setSelectedPage] = useState('Sales')

  return (
    <div className="product-overview-container">
      <div className="product-info-container">
        <img className="product-image" src={data.image} alt="Product Pic" />
        <div className="product-title">{data.title}</div>
        <div className="product-subtitle">{data.subtitle}</div>
      </div>
      <div className="product-tags-container">
        {data.tags.map((tag) => {
          return <Tag key={tag} text={tag} />
        })}
      </div>
      <div className="product-pages-container">
        <div 
          onClick={() => setSelectedPage('Overview')}
          className={selectedPage === 'Overview' ? 'selected-page page-link' : 'page-link'}
        >
          Overview
        </div>
        <div 
          onClick={() => setSelectedPage('Sales')}
          className={selectedPage === 'Sales' ? 'selected-page page-link' : 'page-link'}
        >
          Sales
        </div>
      </div>
    </div>
  );
}

export default ProductOverview;