import { CreatePost } from "../../../src/domain/Blog/UseCase/CreatePost"
import { InMemoryPostRepository } from "./mock/InMemoryPostRepository"

describe("CreatePost", () => {

    const InMemoryPostRepositoryInstance = new InMemoryPostRepository()

    it("should create a post", async done => {
        const useCase = new CreatePost(InMemoryPostRepositoryInstance)

        const post = await useCase.execute(
            "MonTitre",
            "MonText",
            new Date(),
            "1"
        )

        expect(post).toBeDefined()
        done()
    })
})