import React from 'react';

const ChildtoParentsComponent = (props) => {
  const handleGreet = () => {
    props.greet(); 
  };

  return (
    <div>
      <h2>Child Component</h2>
      <button style={{backgroundColor: "darkblue",  color: "white"}} onClick={handleGreet}>Greet App</button>
    </div>
  );
};

export default ChildtoParentsComponent;