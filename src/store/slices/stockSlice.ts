import { createSlice } from '@reduxjs/toolkit'
import { ChartState } from '../../types'

const initialState: ChartState = {}

export const chartSlice = createSlice({
  name: 'chart',
  initialState,
  reducers: {},
})

export default chartSlice.reducer