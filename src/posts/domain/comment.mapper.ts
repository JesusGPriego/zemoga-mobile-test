import { RawComment } from '../interfaces';
import { Comment } from './Comment';

export const commentDomainMapper = (comment: RawComment) => {
  return new Comment({
    postId: comment.postId,
    id: comment.id,
    name: comment.name,
    email: comment.email,
    body: comment.body,
  });
};
