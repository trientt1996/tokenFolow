// src/pages/Home.js
import React, { useEffect, useState } from 'react';
import SpotTable from '../components/SpotTable';
import { axiosInstance, TOKEN_CRYPTO, TOKEN_CRYPTO_ALL } from '../commons/constant';
import { useSearchParams } from 'react-router-dom';
function Crypto() {
  const [spotData, setSpotData] = useState();
  const [searchParams] = useSearchParams();
  const query = searchParams.get('query');
  useEffect(() => {
    const handleGetToken = async () => {
      try {
        const data = await axiosInstance.get('getToken');
        const tokens = data?.data?.filter((val) => {
          if (TOKEN_CRYPTO?.includes(val?.token) && !query) {
            return val;
          }
          if (TOKEN_CRYPTO_ALL?.includes(val?.token) && query == 'all') {
            return val;
          }
        });
        const data5m = [];
        const data15m = [];
        const data1h = [];
        const data4h = [];
        const data1d = [];
        const data1w = [];
        for (const token of tokens) {
          data5m.push({
            name: token?.token,
            percentChange: token?.['5m'],
            macd5m: token?.macd5m,
            macdOld5m: token?.macdOld5m,
            trend5m: token?.trend5m,
            nextTime5m: token?.nextTime5m,
          });
          data15m.push({
            name: token?.token,
            percentChange: token?.['15m'],
            macd15m: token?.macd15m,
            macdOld15m: token?.macdOld15m,
            trend15m: token?.trend15m,
            nextTime15m: token?.nextTime15m,
          });
          data1h.push({
            name: token?.token,
            percentChange: token?.['1h'],
            macd1h: token?.macd1h,
            macdOld1h: token?.macdOld1h,
            trend1h: token?.trend1h,
            nextTime1h: token?.nextTime1h,
          });
          data4h.push({
            name: token?.token,
            percentChange: token?.['4h'],
            macd4h: token?.macd4h,
            macdOld4h: token?.macdOld4h,
            trend4h: token?.trend4h,
            nextTime4h: token?.nextTime4h,
          });
          data1d.push({
            name: token?.token,
            percentChange: token?.['1d'],
            macd1d: token?.macd1d,
            macdOld1d: token?.macdOld1d,
            trend1d: token?.trend1d,
            nextTime1d: token?.nextTime1d,
          });
          data1w.push({
            name: token?.token,
            percentChange: token?.['1w'],
            macd1w: token?.macd1w,
            macdOld1w: token?.macdOld1w,
            trend1w: token?.trend1w,
            nextTime1w: token?.nextTime1w,
          });
        }
        const spotData = [
          {
            title: 'SPOT 5m',
            data: data5m,
            time: '5m',
          },
          {
            title: 'SPOT 15m',
            data: data15m,
            time: '15m',
          },
          {
            title: 'SPOT 1h',
            data: data1h,
            time: '1h',
          },
          {
            title: 'SPOT 4h',
            data: data4h,
            time: '4h',
          },
          {
            title: 'SPOT 1d',
            data: data1d,
            time: '1d',
          },
          {
            title: 'SPOT 1w',
            data: data1w,
            time: '1w',
          },
        ];
        setSpotData(spotData);
      } catch (error) {}
    };
    handleGetToken();
    const interval = setInterval(() => {
      handleGetToken();
    }, 300000);

    return () => clearInterval(interval);
  }, []);
  return (
    <div className="container">
      <div className="row">
        {spotData?.map((section, index) => (
          <SpotTable key={index} title={section.title} data={section.data} time={section.time} />
        ))}
      </div>
    </div>
  );
}

export default Crypto;
