import { createSlice } from '@reduxjs/toolkit'
import { setStock } from '../actions/stockActions';
import { ChartState } from '../../types'

const initialState: ChartState = {
  status: "init",
}

const setStcokPending = (state: ChartState ) => {
  state.status = "loading";
}

const setStcokFulfilled = (state: ChartState, action: any ) => {

}

export const chartSlice = createSlice({
  name: 'chart',
  initialState,
  reducers: {},
  extraReducers: {
    [setStock.pending as any]: setStcokPending,
    [setStock.fulfilled as any]: setStcokFulfilled,
}
})

export default chartSlice.reducer