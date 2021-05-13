import { Post } from "../../../../src/domain/Blog/Entity/Post";
import { IPostRepository } from "../../../../src/domain/Blog/Port/IPostRepository";

export class InMemoryPostRepository implements IPostRepository {
  public posts: Post[] = [];

  getOne(id: string): Promise<Post | null> {
    return new Promise((resolve, reject) => {
      const post = this.posts.find(x=>x.id === id) ?? null

      resolve(post);
    });
  }

  getAll(): Promise<Post[]> {
    return new Promise((resolve, reject) => {
      resolve(this.posts);
    });
  }

  add(post: Post): Promise<boolean> {
    return new Promise((resolve, reject) => {
      this.posts.push(post);
      resolve(true);
    });
  }
}
