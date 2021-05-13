import { GetAllPosts } from "../../../src/domain/Blog/UseCase/GetAllPosts"
import { InMemoryPostRepository } from "./mock/InMemoryPostRepository"

describe("GetAllPosts", () => {
    const InMemoryPostRepositoryInstance = new InMemoryPostRepository()

    it("should return all posts", async done => {
        InMemoryPostRepositoryInstance.posts.push({
            title:"Test",
            text:"Mon texte",
            publishedAt:new Date(),
            id:"1"
        })
        const useCase = new GetAllPosts(InMemoryPostRepositoryInstance)

        const posts = await useCase.execute()

        expect(posts.length >0).toBe(true)
        done()
    })
})