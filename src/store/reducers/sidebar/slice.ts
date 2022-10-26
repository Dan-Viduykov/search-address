import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { sidebarState } from './types';

const initialState: sidebarState = {
  show: false
}

export const sidebarSlice = createSlice({
  name: 'sidebar',
  initialState,
  reducers: {
    setShow: (state, action: PayloadAction<boolean>) => {
      state.show = action.payload
    }
  },
})

export const {
  setShow
} = sidebarSlice.actions

export const sidebarReducer = sidebarSlice.reducer;