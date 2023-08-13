import { useEffect, useState } from 'react';
import { postDB } from '../../api';
import { User, userDomainMapper } from '../domain';
import { RawUser } from '../interfaces';

export const useFetchUser = (id: number) => {
  const [user, setUser] = useState<User>();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getUser = async () => {
      const resp = await postDB.get<RawUser>(`users/${id}`);
      const mappedUsers = userDomainMapper(resp.data);
      setUser(mappedUsers);
      setIsLoading(false);
    };
    getUser();
  }, [id]);

  return { user, isLoading };
};
