import { configureStore } from '@reduxjs/toolkit';
import { UserSlice } from './user';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { PostSlice } from './posts';
import { CommentSlice } from './comments';
export const store = configureStore({
  reducer: {
    user: UserSlice.reducer,
    posts: PostSlice.reducer,
    comments: CommentSlice.reducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({ serializableCheck: false }),
});

export const useAppDistpach: () => typeof store.dispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<
  ReturnType<typeof store.getState>
> = useSelector;
