import React from 'react';
import Tag from '../Tag/Tag'
import './ProductOverview.css';

function ProductOverview({ data }) {
  return (
    <div className="product-overview-container">
      <div className="product-info-container">
        <img className="product-image" src={data.image} alt="Product Image" />
        <div className="product-title">{data.title}</div>
        <div className="product-subtitle">{data.subtitle}</div>
      </div>
      <div className="product-tags-container">
        {data.tags.map((tag) => {
          return <Tag text={tag} />
        })}
      </div>
      <div className="product-pages-container">
        <div>OVERVIEW</div>
        <div>SALES</div>
      </div>
    </div>
  );
}

export default ProductOverview;