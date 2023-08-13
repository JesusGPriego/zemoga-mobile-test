import { useEffect, useState } from 'react';
import { Post } from '../interfaces';
import { postDB } from '../api';

export const usePosts = () => {
  const [posts, setPosts] = useState<Post[]>();
  const [isLoading, setIsLoading] = useState(true);

  const getPosts = async () => {
    const resp = await postDB.get<Post[]>('posts');
    setPosts(resp.data);
    setIsLoading(false);
  };
  useEffect(() => {
    getPosts();
  }, []);

  return { posts, isLoading };
};
