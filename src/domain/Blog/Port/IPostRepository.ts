import { Post } from "../Entity/Post";

/**
 * This is the interface of the secondary port (output)
 */
export interface IPostRepository {

    getAll():Promise<Post[]>

    getOne(id:string):Promise<Post|null>
    
    add(post:Post):Promise<boolean>
}