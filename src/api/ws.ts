export const WS_URL = `wss://ws.finnhub.io?token=${process.env.REACT_APP_TOKEN}`;
export const AAPL_STOCK = JSON.stringify({'type':'subscribe', 'symbol': 'AAPL'});
