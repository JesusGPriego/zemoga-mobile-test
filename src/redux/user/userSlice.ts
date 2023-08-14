import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { RawUser, User, userDomainMapper } from '../../users';
import { postDB } from '../../api';

interface UserState {
  user: User | undefined;
  isLoading: boolean;
}

const initialState: UserState = {
  user: undefined,
  isLoading: false,
};

export const fetchUsers = createAsyncThunk(
  'users/fetchUsers',
  async (id: number) => {
    const resp = await postDB.get<RawUser>(`users/${id}`);
    const user = userDomainMapper(resp.data);

    return user;
  },
);

export const UserSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(fetchUsers.fulfilled, (state, action) => {
      state.user = action.payload;
      state.isLoading = false;
    });

    builder.addCase(fetchUsers.pending, state => {
      state.isLoading = true;
    });
  },
});

export default UserSlice.reducer;
