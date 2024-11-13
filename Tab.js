import React from 'react';

const Tab = ({ name, isActive, onClick }) => {
  const tabStyle = {
    padding: '15px 30px',
    cursor: 'pointer',
    borderBottom: isActive ? '3px solid #66B032' : 'none',
    color: isActive ? '#66B032' : 'black',
    backgroundColor: isActive ? '#F9F3A1' : 'transparent',
    fontWeight: isActive ? 'bold' : 'normal',
    transition: 'all 0.3s ease',
  };

  return (
    <div style={tabStyle} onClick={onClick}>
      {name}
    </div>
  );
};

export default Tab;
