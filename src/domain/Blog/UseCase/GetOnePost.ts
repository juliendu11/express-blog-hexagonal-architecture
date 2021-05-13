import { Post } from "../Entity/Post";
import { IGetOnePost } from "../Port/IPost";
import { IPostRepository } from "../Port/IPostRepository";

export class GetOnePost implements IGetOnePost{

    constructor(private repository:IPostRepository){}

    public async execute(id:string):Promise<Post|null>{
        return this.repository.getOne(id)
    }
}