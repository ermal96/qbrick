
  
import { RootState } from './../index';
import {createSelector} from "@reduxjs/toolkit";

export const selectStockState = createSelector((state: RootState) => state, (state) => state.stock)