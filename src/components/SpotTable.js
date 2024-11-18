// src/components/SpotTable.js
import React from 'react';

function SpotTable({ title, data }) {
  return (
    <div className="table-container">
      <h3 className="table-title">{title}</h3>
      <table className="custom-table">
        <thead>
          <tr>
            <th>Tên</th>
            <th>%</th>
            <th>Buy/Sell</th>
          </tr>
        </thead>
        <tbody>
          {data?.map((item, index) => (
            <tr key={index}>
              <td className="text-blue">{item?.name}</td>
              <td>{item?.percentChange} %</td>
              <td>
                {item?.macdOld < 0 && item?.macd > 0
                  ? 'Buy'
                  : item?.macdOld > 0 && item?.macd < 0
                  ? 'Sell'
                  : 'Đứng ngoài'}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default SpotTable;
