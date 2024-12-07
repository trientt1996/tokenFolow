import axios from 'axios';

export const endpointApi = 'http://13.229.251.30:3001';
// export const endpointApi = 'http://localhost:3001';
export const axiosInstance = axios.create({
  baseURL: endpointApi, // Đặt URL cơ sở cho các yêu cầu
  timeout: 10000, // Thời gian chờ tối đa cho yêu cầu
  headers: {
    'Content-Type': 'application/json',
  },
});

export const TOKEN_CRYPTO = ['BTCUSDT', 'TONUSDT', 'BNBUSDT', 'ETHUSDT'];

export const TOKEN_CRYPTO_ALL = [
  'BTCUSDT',
  'TONUSDT',
  'BNBUSDT',
  'ETHUSDT',
  'AAVEUSDT',
  'ADAUSDT',
  'ALGOUSDT',
  'ARUSDT',
  'ATOMUSDT',
  'AVAXUSDT',
  'AXSUSDT',
  'BCHUSDT',
  'CAKEUSDT',
  'CFXUSDT',
  'CHZUSDT',
  'COMPUSDT',
  'CRVUSDT',
  'DOGEUSDT',
  'DOTUSDT',
  'EGLDUSDT',
  'EOSUSDT',
  'ETCUSDT',
  'FETUSDT',
  'FILUSDT',
  'FLOWUSDT',
  'FTMUSDT',
  'FTTUSDT',
  'GRTUSDT',
  'HBARUSDT',
  'ICPUSDT',
  'INJUSDT',
  'IOTAUSDT',
  'IOTXUSDT',
  'KAVAUSDT',
  'KLAYUSDT',
  'LINKUSDT',
  'LTCUSDT',
  'LUNAUSDT',
  'MANAUSDT',
  'MATICUSDT',
  'MINAUSDT',
  'MKRUSDT',
  'NEARUSDT',
  'NEOUSDT',
  'PAXGUSDT',
  'QNTUSDT',
  'ROSEUSDT',
  'RUNEUSDT',
  'SANDUSDT',
  'SCUSDT',
  'SHIBUSDT',
  'SNXUSDT',
  'SOLUSDT',
  'STORJUSDT',
  'STXUSDT',
  'THETAUSDT',
  'TRXUSDT',
  'TUSDUSDT',
  'TWTUSDT',
  'UNIUSDT',
  'USDCUSDT',
  'VETUSDT',
  'XLMUSDT',
  'XMRUSDT',
  'XRPUSDT',
  'XTZUSDT',
  'ZECUSDT',
  'ZILUSDT',
  'GNOUSDT',
  'XECUSDT',
  'ELFUSDT',
  'GALAUSDT',
  'RNDRUSDT',
  'FXSUSDT',
  'IMXUSDT',
  'WOOUSDT',
  'ASTRUSDT',
  'GMTUSDT',
  'APEUSDT',
  'NEXOUSDT',
  'LDOUSDT',
  'OPUSDT',
  'LUNCUSDT',
  'GMXUSDT',
  'APTUSDT',
  'OSMOUSDT',
  'RPLUSDT',
  'GASUSDT',
  'ARBUSDT',
  'WBTCUSDT',
  'SUIUSDT',
  'PEPEUSDT',
  'WBETHUSDT',
  'FDUSDUSDT',
  'SEIUSDT',
  'TIAUSDT',
  'ORDIUSDT',
  'BLURUSDT',
  '1000SATSUSDT',
  'BONKUSDT',
];
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
