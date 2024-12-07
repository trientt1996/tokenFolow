// src/components/SpotTable.js
import React, { useState } from 'react';
import BigNumber from 'bignumber.js';
function SpotTable({ title, data, time }) {
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
            let textPercent = '';
            if (
              new BigNumber(item?.[`macdOld${time}`]).lte(0) &&
              new BigNumber(item?.[`macd${time}`]).gte(0) &&
              item?.[`trend${time}`] == 'down' &&
              item?.[`nextTime${time}`] < Date.now()
            ) {
              textAction = 'Buy';
            }
            if (
              new BigNumber(item?.[`macdOld${time}`]).gte(0) &&
              new BigNumber(item?.[`macd${time}`]).lte(0) &&
              item?.[`trend${time}`] == 'up' &&
              item?.[`nextTime${time}`] < Date.now()
            ) {
              textAction = 'Sell';
            }

            if (new BigNumber(item?.percentChange).gte(0)) {
              textPercent = 'Buy';
            }
            if (new BigNumber(item?.percentChange).lt(0)) {
              textPercent = 'Sell';
            }
            return (
              <tr key={index}>
                <td className="text-blue">{item?.name}</td>
                <td className={textPercent}>{item?.percentChange} %</td>
                <td className={textAction}>{textAction}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default SpotTable;
