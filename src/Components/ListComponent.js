// ListComponent.js
import React from 'react';

const ListComponent = () => {
  const items = ['Item 1', 'Item 2', 'Item 3'];

  return (
    <div>
      <h1>List Component</h1>
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default ListComponent;