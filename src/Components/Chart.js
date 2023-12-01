import React, { useEffect } from "react";
import { LineChart } from "@mui/x-charts/LineChart";

export default function KPILineChart({ dataDictionary, selectedKPIs }) {

  if (dataDictionary === null) {
    return <p>No data to display.</p>;
  } else {
    const ChartData = dataDictionary.map((obj) => {
      const newObj = {};

      Object.entries(obj).forEach(([key, value]) => {
        if (key === "Time" || key.startsWith("Ne") || key === selectedKPIs) {
          newObj[key] = value;
        }
      });
      return newObj;
    });


     const Ne = ChartData [0];
     const [firstKey, firstValue] = Object.entries(ChartData [0])[0];
     let valuesMap = {};
     let xLabelsSet = new Set();
    // console.log(`First key: ${firstKey}`);
    // console.log(Ne);
    ChartData.forEach(obj => {
      const key1Value = obj[firstKey];
      const key2Value = obj[selectedKPIs];
      const key3Value = obj["Time"];

      if (!valuesMap[key1Value]) {
        valuesMap[key1Value] = {
            values: [],
            indexMap: {}
        };
    }

    // Add values to arrays
    valuesMap[key1Value].values.push(key2Value);
    valuesMap[key1Value].indexMap[key3Value] = valuesMap[key1Value].values.length - 1;

    xLabelsSet.add(key3Value);
});

// Sort arrays and convert set to array for xLabels
const xLabels = Array.from(xLabelsSet).sort();

// Sort valuesMap according to xLabels
for (const key in valuesMap) {
    valuesMap[key].values.sort((a, b) => {
        const indexA = valuesMap[key].indexMap[a];
        const indexB = valuesMap[key].indexMap[b];
        return xLabels.indexOf(a) - xLabels.indexOf(b);
    });
}

// Output the result
for (const key in valuesMap) {
    console.log(`${key} = [${valuesMap[key].values.join(', ')}]`);
}
console.log(`xLabels = [${xLabels.join(', ')}]`);

let exportedArrays = {};

    for (const key in valuesMap) {
  
        exportedArrays[key] = valuesMap[key].values;
    }
    
    let series = [];

// Iterate over each key-value pair in exportedArrays
for (const key in exportedArrays) {

    // Create an object with data and label keys
    const seriesObject = {
        data: exportedArrays[key],
        label: key
    };

    // Add the object to the series array
    series.push(seriesObject);
}
       
    return (
      <LineChart
        height={300}
        style={{
          background: "antiquewhite",
          boxShadow: "2px 2px rgba(247, 245, 245, 0.819)",
        }}
        series={series}
        xAxis={[{ scaleType: "point", data: xLabels }]}
      />
    );
  }
}
