// ParentComponent.js
import React from 'react';
import ChildComponent from './ChildComponent';

const ParentComponent = () => {
  const data = {
    name: 'John Doe',
    age: 25,
  };

  return (
    <div>
      <h1>Parent Component</h1>
      <ChildComponent data={data} />
    </div>
  );
};

export default ParentComponent;