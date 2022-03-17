import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Message, StockState } from '../../types'

const initialState: StockState = {
  messages: [],
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
        state.messages.push(item);
      })
    }),
  },
})

export const stockActions = stockSlice.actions;

export default stockSlice.reducer