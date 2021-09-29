import { createSlice } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';

const initialState = [];

export const alertSlice = createSlice({
  name: 'alert',
  initialState,
  reducers: {
    removeAlert: () => initialState,
    setAlert: {
      reducer: (state, action) => {
        state.push(action.payload);
      },
      prepare: ({ msg, alertType }) => {
        const id = uuidv4();
        return { payload: { id, msg, alertType } };
      },
    },
  },
});

export const { setAlert, removeAlert } = alertSlice.actions;

export const selectAlerts = (state) => state.alert;

export default alertSlice.reducer;
