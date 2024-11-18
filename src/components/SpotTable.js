// src/components/SpotTable.js
import React from 'react';

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
            return (
              <tr key={index}>
                <td className="text-blue">{item?.name}</td>
                <td>{item?.percentChange} %</td>
                <td>
                  {item?.[`macdOld${time}`] < 0 && item?.[`macd${time}`] > 0
                    ? 'Buy'
                    : item?.[`macdOld${time}`] > 0 && item?.[`macd${time}`] < 0
                    ? 'Sell'
                    : 'Đứng ngoài'}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default SpotTable;
