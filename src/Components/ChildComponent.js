// ChildComponent.js
import React from 'react';
import PropTypes from 'prop-types';

const ChildComponent = ({ data }) => {
  return (
    <div>
      <h2>Child Component</h2>
      <p>Name: {data.name}</p>
      <p>Age: {data.age}</p>
    </div>
  );
};

ChildComponent.propTypes = {
  data: PropTypes.object.isRequired,
};

export default ChildComponent;