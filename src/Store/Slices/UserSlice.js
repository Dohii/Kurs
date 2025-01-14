import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "userData",
  initialState: { users: [], refetchUsers: () => null },
  reducers: {
    setData: (state, action) => {
      const oldData = { ...state };
      return { ...oldData, users: action.payload };
    },
    setRefetch: (state, action) => {
      const oldData = { ...state };
      return { ...oldData, refetchUsers: action.payload };
    },
    triggerRefetch: (state) => {
      state.refetchUsers?.();
    },
  },
});

export const { setData, setRefetch, triggerRefetch } = userSlice.actions;

export default userSlice.reducer;
