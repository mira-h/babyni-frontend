import React from 'react';

export default function DataTable({ dataDictionary }) {
  if (dataDictionary === null) {
    return <p>No data to display.</p>;
  } else {
    const rows = Object.entries(dataDictionary);

    return (
      <div style={{ maxHeight: '300px', marginBottom: '10px', overflowY: 'auto' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse', backgroundColor: 'antiquewhite' }}>
          <thead>
            <tr style={{ position: 'sticky', top: 0, backgroundColor: ' rgba(116, 18, 28, 0.8)', zIndex: 1 }}>
              {Object.keys(rows[0][1]).map((column) => (
                <th key={column} style={{ padding: '8px', border: '1px solid #ddd' }}>
                  {column}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map(([rowKey, rowData], index) => (
              <tr key={index} style={{ borderBottom: '1px solid #ddd' }}>
                {Object.values(rowData).map((cell, cellIndex) => (
                  <td key={cellIndex} style={{ padding: '8px', border: '1px solid #ddd' }}>
                    {cell}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}
