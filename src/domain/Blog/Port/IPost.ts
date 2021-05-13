import { Post } from "../Entity/Post";

/**
 * This is the interface of the primary port (input)
 */
export interface ICreatePost {
    execute(title:string, text:string,publishedAt:Date, id:string):Promise<Post|null>
}

/**
 * This is the interface of the primary port (input)
 */
 export interface IGetAllPost {
    execute():Promise<Post[]>
}

/**
 * This is the interface of the primary port (input)
 */
 export interface IGetOnePost {
    execute(id:string):Promise<Post|null>
}