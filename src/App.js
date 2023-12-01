
import axios from "axios";
import React, { useEffect, useState } from 'react';
import Bar from "./Components/Bar";
import KPILineChart from "./Components/Chart";
import DateFrom, {DateTo} from "./Components/DateTimePicker";
import DataTable from "./Components/Table";
import TimeRadioButton, { KPIButton, NERadioButton } from "./Components/RadioButton";
import Submit from "./Components/Submit";
import Dropdown from "./Components/KPIDropdown";

export default function App() {

  const [DataDictionary, setDataDictionary] = React.useState(null);
  const [dateFrom, setDateFrom] = React.useState(null);
  const [dateTo, setDateTo] = React.useState(null);
  const [selectedTimeFilter, setSelectedTimeFilter] =  React.useState(null);
  const [selectedNERadio, setSelectedNERadio] =  React.useState(null);
 const [selectedKPI, setSelectedKPI] = useState(null);
 
 

 const handleKPIChange = (KPI) => {
  setSelectedKPI(KPI);
  console.log(KPI);
};

useEffect(() => {
  console.log('Selected KPI in useEffect:', selectedKPI);
}, [selectedKPI]);

const handleDateFromChange = (newDate) => {
  setDateFrom(newDate);
  console.log(newDate);
};

const handleDateToChange = (newDate) => {
  setDateTo(newDate);
  console.log(newDate);
};

const handleTimeFilterChange = (selectedvalue) => {
  setSelectedTimeFilter(selectedvalue);
  console.log('Selected time filter:', selectedvalue);
};

const handleNERadioChange = (selectedvalue) => {
  console.log('Selected NE radio:', selectedvalue);
  setSelectedNERadio(selectedvalue);
};

const handleSubmit = async (event) => {
  event.preventDefault();

  // Prepare the data to be sent to the API
  const requestData = {
    dateFrom,
    dateTo,
    timeFilter: selectedTimeFilter,
    neRadio: selectedNERadio,
  };

  try {
    const response = await axios.post('https://localhost:7265/api/data', requestData);

    setDataDictionary(response.data);
    console.log('Data Dictionary:', DataDictionary);
  } catch (error) {
    console.error('API Error:', error);
  }
};

  return (

  
    <div>
      <h1 className="titles">Yuvo Network Insight</h1>
      <Bar />
      <form onSubmit={handleSubmit}>
      <div id="filters" className="clearfix">
        <div id="DateFrom">
          <h3>Date From: </h3>
          <DateFrom  onDateChange={handleDateFromChange}/>
        </div>
        <div id="DateTo">
          <h3>Date To: </h3>
          <DateTo  onDateChange={handleDateToChange} />
        </div>
    
        <div id="gran" className="filterby">
          
          <TimeRadioButton onTimeFilterChange={handleTimeFilterChange} />
        </div>
        <div id="NE" className="filterby" >
          <NERadioButton onNERadioChange={handleNERadioChange}  />
        </div>
    
        <div id="submit" className="filterby" >
          <Submit type="submit"    />
          
        </div>
      </div>
      </form>
      <div id="container col">
        <div id="Table">
          
          <DataTable dataDictionary={DataDictionary} />
        </div>
        <div id="kpi" className="filterby">
        <Dropdown onOptionChange={handleKPIChange} />
        
        </div>
        <div id="LineChart">
        <KPILineChart dataDictionary={DataDictionary} selectedKPIs={selectedKPI} id="LineChart"/>
        </div>
        </div>
      </div>
  );
  }
