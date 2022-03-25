import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Message, StockState } from '../../types'

const initialState: StockState = {
  aapl: [],
  btcusdt: [],
  isConnected: false
}

export const stockSlice = createSlice({
  name: 'stock',
  initialState,
  reducers: {
    connectionEstablished: (state => {
      state.isConnected = true;
    }),
    receiveMessage: ((state, action: PayloadAction<Message[]>) => {
      action.payload?.length && action.payload.forEach((item) => {
        switch (item.s) {
          case "AAPL":
             state.aapl.push(item);
            break;
          case "BINANCE:BTCUSDT":
              state.btcusdt.push(item);
             break;
          default:
            break;
        }
       
      })
    }),
  },
})

export const stockActions = stockSlice.actions;

export default stockSlice.reducer