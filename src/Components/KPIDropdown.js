import React from 'react';

const Dropdown = ({ onOptionChange }) => {
  const [selectedKPI, setSelectedKPI] = React.useState('MAX_RX_LEVEL');

  const handleKPIChange = (event) => {
    setSelectedKPI(event.target.value);
    onOptionChange(event.target.value);
  };

  return (
    <div>
      <label style={{ color: 'antiquewhite' }}>Select a KPI:</label>
      <select value={selectedKPI} onChange={handleKPIChange} style={{borderRadius:'2px', margin:'2px', padding:'2px', background: 'antiquewhite', opacity:'90%' }}>
        <option value="MAX_RX_LEVEL" >MAX_RX_LEVEL</option>
        <option value="RSL_DEVIATION">RSL_DEVIATION</option>
        <option value="RSL_INPUT_POWER">RSL_INPUT_POWER</option>
      </select>


    </div>
  );
};

export default Dropdown;