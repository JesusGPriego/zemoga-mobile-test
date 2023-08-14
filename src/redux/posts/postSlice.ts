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

export const deletePost = createAsyncThunk(
  'posts/delete',
  async (postId: number) => {
    await postDB.delete(`posts/${postId}`);
    return postId;
  },
);
export const deleteAllNonFavoritePosts = createAsyncThunk(
  'posts/deleteAll',
  async (posts: Post[]) => {
    posts.forEach(post => {
      post.favorite === false &&
        postDB.delete(`posts/${post.id}`).catch(error => console.log(error));
    });
    return true;
  },
);

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
      state.isLoading = false;
    });

    builder.addCase(fetchPosts.pending, state => {
      state.isLoading = true;
    });
    builder.addCase(deletePost.fulfilled, (state, action) => {
      const postsAfterdelete = state.posts.filter(
        post => action.payload !== post.id,
      );
      state.posts = postsAfterdelete;
      state.isLoading = false;
    });
    builder.addCase(deletePost.pending, state => {
      state.isLoading = true;
    });
    builder.addCase(deleteAllNonFavoritePosts.fulfilled, state => {
      const postsAfterdelete = state.posts.filter(
        post => post.favorite === true,
      );
      state.posts = postsAfterdelete;
      state.isLoading = false;
    });
    builder.addCase(deleteAllNonFavoritePosts.pending, state => {
      state.isLoading = true;
    });
  },
});

export default PostSlice.reducer;
export const { toggleFavorite } = PostSlice.actions;
