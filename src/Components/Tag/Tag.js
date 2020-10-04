import React from 'react';
import './Tag.css';

function Tag({text}) {
  return (
    <span className="tag-container">{text}</span>
  );
}

export default Tag;