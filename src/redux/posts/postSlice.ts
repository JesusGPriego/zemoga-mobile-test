import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';

import { postDB } from '../../api';
import { Post, postDomainMapper, RawPost } from '../../posts';

interface PostsState {
  posts: Post[];
  isLoading: boolean;
}

const initialState: PostsState = {
  posts: [],
  isLoading: false,
};

const togglePostFavoriteValue = (posts: Post[], postId: number): Post[] => {
  const nonSortedPosts = posts.map<Post>(post =>
    post.id === postId ? new Post({ ...post, favorite: !post.favorite }) : post,
  );

  const sortedPosts = nonSortedPosts.sort((a: Post, b: Post) => {
    const aFavorite = a.favorite ? 1 : 0;
    const bFavorite = b.favorite ? 1 : 0;
    return aFavorite < bFavorite ? 1 : aFavorite > bFavorite ? -1 : 0;
  });
  return sortedPosts;
};

export const fetchPosts = createAsyncThunk('posts/fetch', async () => {
  const resp = await postDB.get<RawPost[]>('posts');
  const posts = resp.data.map(post => postDomainMapper(post));

  return posts;
});

export const PostSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    toggleFavorite: (state, action: PayloadAction<number>) => {
      const updatedPosts = togglePostFavoriteValue(state.posts, action.payload);
      state.posts = updatedPosts;
    },
  },
  extraReducers: builder => {
    builder.addCase(fetchPosts.fulfilled, (state, action) => {
      state.posts = action.payload;
    });

    builder.addCase(fetchPosts.pending, state => {
      state.isLoading = !state.isLoading;
    });
  },
});

export default PostSlice.reducer;
export const { toggleFavorite } = PostSlice.actions;
