// src/pages/Home.js
import React, { useEffect, useState } from 'react';
import SpotTable from '../components/SpotTable';
import { axiosInstance, TOKEN_FOREX } from '../commons/constant';

function Forex() {
  const [spotData, setSpotData] = useState();
  useEffect(() => {
    const handleGetToken = async () => {
      try {
        const data = await axiosInstance.get('getToken');
        const tokens = data?.data?.filter((val) => {
          if (TOKEN_FOREX?.includes(val?.token)) {
            return val;
          }
        });
        // const data5m = [];
        const data15m = [];
        const data1h = [];
        const data4h = [];
        const data1d = [];
        const data1w = [];
        for (const token of tokens) {
          // data5m.push({ name: token?.token, percentChange: token?.['5m'] });
          data15m.push({ name: token?.token, percentChange: token?.['15m'] });
          data1h.push({ name: token?.token, percentChange: token?.['1h'] });
          data4h.push({ name: token?.token, percentChange: token?.['4h'] });
          data1d.push({ name: token?.token, percentChange: token?.['1d'] });
          data1w.push({ name: token?.token, percentChange: token?.['1w'] });
        }
        const spotData = [
          // {
          //   title: 'SPOT 5m',
          //   data: data5m,
          // },
          {
            title: 'SPOT 15m',
            data: data15m,
          },
          {
            title: 'SPOT 1h',
            data: data1h,
          },
          {
            title: 'SPOT 4h',
            data: data4h,
          },
          {
            title: 'SPOT 1d',
            data: data1d,
          },
          {
            title: 'SPOT 1w',
            data: data1w,
          },
        ];
        setSpotData(spotData);
      } catch (error) {}
    };
    handleGetToken();
  }, []);
  return (
    <div className="container">
      <div className="row">
        {spotData?.map((section, index) => (
          <SpotTable key={index} title={section.title} data={section.data} />
        ))}
      </div>
    </div>
  );
}

export default Forex;
