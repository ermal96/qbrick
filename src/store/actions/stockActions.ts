
import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from '../../api';

export const setStock = createAsyncThunk(
  'stock/set',
  async () => {
    try {
      const startDate = Math.round(new Date().getTime() / 1000);
      const endDate = startDate - (72 * 3600);
    
      const result = await axios.get("/stock/candle", {
        params: {
          symbol: "AAPL",
          resolution: 5,
          from: startDate,
          to:  endDate,
          token: process.env.REACT_APP_API_TOKEN as string,
        }
      });

      return result.data;
  
    } catch (error: any) {
      
    }
  }
);