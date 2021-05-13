import mongoose from "mongoose";
import { PostDocument, PostModel } from "./MongoDBPostModel";

export class MongoDBService {
  async connect() {
    const url =`mongodb://${process.env.MONGO_DB_HOST}:${process.env.MONGO_DB_PORT}/${process.env.MONGO_DB_DATABASE}`

    await mongoose.connect(url, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
      useCreateIndex: true,
    });
  }

  async findOne(id: string): Promise<PostDocument | null> {
    return await PostModel.findOne({ id }).lean();
  }

  async findAll(): Promise<PostDocument[]> {
    return await PostModel.find({}).lean();
  }

  async create(
    title: string,
    text: string,
    publishedAt: Date,
    id: string
  ): Promise<PostDocument | null> {
    return await PostModel.create({
      title,
      text,
      id,
      publishedAt,
    });
  }
}
