import { RawPost } from '../interfaces/rawPost';
import { Post } from './';

export const postDomainMapper = (post: RawPost) => {
  return new Post({
    id: post.id,
    userId: post.userId,
    title: post.title,
    body: post.body,
  });
};
