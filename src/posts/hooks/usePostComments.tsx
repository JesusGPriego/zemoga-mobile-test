import { useEffect, useState } from 'react';
import { postDB } from '../../api';
import { Comment } from '../domain';
import { RawComment } from '../interfaces';

export const useFetchPostComments = (id: number) => {
  const [comments, setPosts] = useState<Comment[]>();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getComments = async () => {
      const resp = await postDB.get<RawComment[]>(`posts/${id}`);

      setPosts(resp.data);
      setIsLoading(false);
    };
    id && getComments();
  }, [id]);
  return { comments, isLoading };
};
