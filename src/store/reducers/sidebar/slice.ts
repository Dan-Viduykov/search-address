import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { sidebarState } from './types';

const initialState: sidebarState = {
  active: false
}

export const sidebarSlice = createSlice({
  name: 'sidebar',
  initialState,
  reducers: {
    setActive: (state, action: PayloadAction<boolean>) => {
      state.active = action.payload
    }
  },
})

export const {
  setActive
} = sidebarSlice.actions

export const sidebarReducer = sidebarSlice.reducer;