import { RawPost } from '../interfaces';

export class Post {
  userId: number;
  id: number;
  title: string;
  body: string;
  constructor({ id, userId, title, body }: RawPost) {
    this.id = id;
    this.userId = userId;
    this.title = title;
    this.body = body;
  }
}
