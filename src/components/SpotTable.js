// src/components/SpotTable.js
import React, { useState } from 'react';

function SpotTable({ title, data, time }) {
  console.log('dsadasd', Date.now());
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
          {data?.map((item, index) => {
            let textAction = 'Đứng ngoài';
            if (
              item?.[`macdOld${time}`] < 0 &&
              item?.[`macd${time}`] > 0 &&
              item?.[`trend${time}`] == 'down' &&
              item?.[`nextTime${time}`] < Date.now()
            ) {
              textAction = 'Buy';
            }
            if (
              item?.[`macdOld${time}`] > 0 &&
              item?.[`macd${time}`] < 0 &&
              item?.[`trend${time}`] == 'up' &&
              item?.[`nextTime${time}`] < Date.now()
            ) {
              textAction = 'Sell';
            }
            return (
              <tr key={index}>
                <td className="text-blue">{item?.name}</td>
                <td>{item?.percentChange} %</td>
                <td>{textAction}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default SpotTable;
