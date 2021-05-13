import express from "express"
import { v4 as uuidv4 } from 'uuid';
import { ICreatePost, IGetAllPost, IGetOnePost } from "../../domain/Blog/Port/IPost";

/**
 * Input port, create a adapter with primary port interface in DI.
 * No implementation only secondary ports do
 */
export class APIAdapter {
    constructor(
        private createPost:ICreatePost,
        private getAllPost:IGetAllPost,
        private getOnePost:IGetOnePost,
        ){}

    launchExpressAPP(){
        const app = express()
        app.use(express.json())
        app.use(express.urlencoded())

        app.get("/", async (req,res) => {
            const posts = await this.getAllPost.execute()

            res.send(JSON.stringify(posts))
        })

        app.get("/:id", async (req,res) => {
            const posts = await this.getOnePost.execute(req.params.id)

            res.send(JSON.stringify(posts))
        })

        app.post("/", async (req,res) => {
            const posts = await this.createPost.execute(
                req.body.title,
                req.body.text,
                new Date(),
                uuidv4()
            )

            res.send(JSON.stringify(posts))
        })

        app.listen("3000", () => {
            console.log('RUN')
        })
    }
}