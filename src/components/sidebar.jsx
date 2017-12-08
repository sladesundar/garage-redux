import React from 'react';

const Sidebar = (props) => {
  return (
    <div className="sidebar">
      <h1>{props.garage}</h1>
      {props.children}
    </div>
  );
};

export default Sidebar;
