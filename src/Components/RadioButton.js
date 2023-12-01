import React, { useState} from 'react';


export default function TimeRadioButton({ onTimeFilterChange }) {
  const [selectedValue, setSelectedValue] = useState();

  const handleChange = (event) => {
    const selectedOption = event.target.value;
    setSelectedValue(selectedOption);
    onTimeFilterChange(selectedOption);
  };


  return (
    <div className="radio">
      <span>Filter by:</span>
      <label style={{ color: 'antiquewhite' }}>
        <input
          type="radio"
          value="TRANS_MW_AGG_SLOT_HOURLY"
          checked={selectedValue === 'TRANS_MW_AGG_SLOT_HOURLY'}
          onChange={handleChange}
        />
        Hourly
      </label>
      <label style={{ color: 'antiquewhite' }}>
        <input
          type="radio"
          value="TRANS_MW_AGG_SLOT_DAILY"
          checked={selectedValue === 'TRANS_MW_AGG_SLOT_DAILY'}
          onChange={handleChange}
        />
        Daily
      </label>
    </div>
  );
}

export function NERadioButton({ onNERadioChange }) {
  const [selectedValue, setSelectedValue] = useState();

  const handleChange = (event) => {
    const selectedOption = event.target.value;
    setSelectedValue(selectedOption);
    onNERadioChange(selectedOption);
  };

  return (
    <div className="radio">

      <label style={{ color: 'antiquewhite' }}>
        <input
          type="radio"
          value="NeAlias"
          checked={selectedValue === 'NeAlias'}
          onChange={handleChange}
        />
        NeAlias
      </label>
      <label style={{ color: 'antiquewhite' }}>
        <input
          type="radio"
          value="NeType"
          checked={selectedValue === 'NeType'}
          onChange={handleChange}
        />
        NeType
      </label>
    </div>
  );
}

