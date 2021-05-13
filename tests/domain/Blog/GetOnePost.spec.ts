import { GetAllPosts } from "../../../src/domain/Blog/UseCase/GetAllPosts"
import { GetOnePost } from "../../../src/domain/Blog/UseCase/GetOnePost"
import { InMemoryPostRepository } from "./mock/InMemoryPostRepository"

describe("GetOnePost", () => {
    const InMemoryPostRepositoryInstance = new InMemoryPostRepository()

    it("should return 1 post with 01 id", async done => {
        InMemoryPostRepositoryInstance.posts.push({
            title:"Test",
            text:"Mon texte",
            publishedAt:new Date(),
            id:"01"
        })
        const useCase = new GetOnePost(InMemoryPostRepositoryInstance)

        const post = await useCase.execute("01")

        expect(post).toBeDefined()
        done()
    })
})