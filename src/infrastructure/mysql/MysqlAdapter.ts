import { Post } from "../../domain/Blog/Entity/Post";
import {IPostRepository} from "../../domain/Blog/Port/IPostRepository"
import { MysqlService } from "./MysqlService";

/**
 * Implement output port, create a adapter
 */
export class MysqlAdapter implements IPostRepository{

    constructor(private mysqlService:MysqlService){}

    async getAll(): Promise<Post[]> {
        return await this.mysqlService.findAll()
    }

    async getOne(id: string): Promise<Post | null> {
        return await this.mysqlService.findOne(id)
    }

    async add(post: Post): Promise<boolean> {
       const createdPost =  await this.mysqlService.create(post.title, post.text, post.publishedAt, post.id)
       return createdPost ? true:false
    }

}