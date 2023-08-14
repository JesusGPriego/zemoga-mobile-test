import { useEffect, useState } from 'react';
import { postDB } from '../../api';
import { Comment } from '../domain';
import { RawComment } from '../interfaces';

export const useFetchPostComments = (id: number) => {
  const [comments, setComments] = useState<Comment[]>();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getComments = async () => {
      const resp = await postDB.get<RawComment[]>(`posts/${id}/comments`);

      setComments(resp.data);
      setIsLoading(false);
    };
    id && getComments();
  }, [id]);
  return { comments, isLoading };
};
