import { RawPost } from '../interfaces';

export class Post {
  userId: number;
  id: number;
  title: string;
  body: string;
  favorite?: boolean;
  constructor({ id, userId, title, body, favorite = false }: RawPost) {
    this.id = id;
    this.userId = userId;
    this.title = title;
    this.body = body;
    this.favorite = favorite;
  }
}
