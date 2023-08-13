import { useEffect, useState } from 'react';
import { Post, postDomainMapper } from '../domain';
import { postDB } from '../../api';
import { RawPost } from '../interfaces';

export const useFetchPosts = () => {
  const [posts, setPosts] = useState<Post[]>();
  const [isLoading, setIsLoading] = useState(true);

  const getPosts = async () => {
    const resp = await postDB.get<RawPost[]>('posts');

    const mappedPosts = resp.data.map(post => postDomainMapper(post));
    setPosts(mappedPosts);
    setIsLoading(false);
  };
  useEffect(() => {
    getPosts();
  }, []);

  return { posts, isLoading };
};
