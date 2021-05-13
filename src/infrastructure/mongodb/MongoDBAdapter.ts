import { Post } from "../../domain/Blog/Entity/Post";
import {IPostRepository} from "../../domain/Blog/Port/IPostRepository"
import { MongoDBService } from "./MongoDBService";

/**
 * Implement output port, create a adapter
 */
export class MongoDBAdapter implements IPostRepository{

    constructor(private mongoDBService:MongoDBService){}

    async getAll(): Promise<Post[]> {
        return await this.mongoDBService.findAll()
    }

    async getOne(id: string): Promise<Post | null> {
        return await this.mongoDBService.findOne(id)
    }

    async add(post: Post): Promise<boolean> {
       const createdPost =  await this.mongoDBService.create(post.title, post.text, post.publishedAt, post.id)
       return createdPost ? true:false
    }

}