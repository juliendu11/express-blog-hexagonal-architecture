import { Post } from "../Entity/Post";
import { IGetAllPost } from "../Port/IPost";
import { IPostRepository } from "../Port/IPostRepository";

export class GetAllPosts implements IGetAllPost{
    constructor(private repository:IPostRepository){}
    
    public async execute():Promise<Post[]>{
        return await this.repository.getAll()
    }
}