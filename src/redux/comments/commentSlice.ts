import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { postDB } from '../../api';
import { Comment, RawComment, commentDomainMapper } from '../../posts';

interface UserState {
  comments: Comment[];
  isLoading: boolean;
}

const initialState: UserState = {
  comments: [],
  isLoading: false,
};

export const fetchComments = createAsyncThunk(
  'users/fetchUsers',
  async (id: number) => {
    const resp = await postDB.get<RawComment[]>(`posts/${id}/comments`);
    const comments = resp.data.map(rawComment =>
      commentDomainMapper(rawComment),
    );

    return comments;
  },
);

export const CommentSlice = createSlice({
  name: 'comments',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(fetchComments.fulfilled, (state, action) => {
      state.comments = action.payload;
      state.isLoading = false;
    });

    builder.addCase(fetchComments.pending, state => {
      state.isLoading = true;
    });
  },
});

export default CommentSlice.reducer;
