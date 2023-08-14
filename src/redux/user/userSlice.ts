import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { User } from '../../users';

interface UserState {
  users: User[];
}

const initialState: UserState = {
  users: [],
};

export const UserSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    addUser: (state, action: PayloadAction<User>) => {
      state.users.push(action.payload);
    },
  },
});

export default UserSlice.reducer;
export const { addUser } = UserSlice.actions;
