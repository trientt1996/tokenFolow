import axios from 'axios';

export const endpointApi = 'http://18.142.178.3:3001';
// export const endpointApi = 'http://localhost:3001';
export const axiosInstance = axios.create({
  baseURL: endpointApi, // Đặt URL cơ sở cho các yêu cầu
  timeout: 10000, // Thời gian chờ tối đa cho yêu cầu
  headers: {
    'Content-Type': 'application/json',
  },
});

export const TOKEN_CRYPTO = ['BTCUSDT', 'BNBUSDT', 'ETHUSDT', 'TONUSDT'];
export const TOKEN_FOREX = [
  'EUR/USD',
  'AUD/USD',
  'NZD/USD',
  'GBP/JPY',
  'CHF/JPY',
  'USD/JPY',
  'EUR/JPY',
  'CAD/JPY',
  'AUD/JPY',
  'NZD/JPY',
  'GBP/CAD',
  'EUR/CAD',
  'USD/CAD',
  'AUD/CAD',
  'NZD/CAD',
  'GBP/CAD',
  'EUR/NZD',
  'AUD/NZD',
];
