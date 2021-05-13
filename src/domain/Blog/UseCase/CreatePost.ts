import { Post } from "../Entity/Post";
import { ICreatePost } from "../Port/IPost";
import { IPostRepository } from "../Port/IPostRepository";

export class CreatePost implements ICreatePost{

    constructor(private repository:IPostRepository){}

    public async execute(title:string, text:string,publishedAt:Date, id:string):Promise<Post|null>{
        const post =  new Post(
            title,
            text,
            publishedAt, 
            id
        )

       const response = await this.repository.add(post)

       if(!response){
           return null
       }

       return post
    }
}