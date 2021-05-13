import {Model, ModelCtor, Sequelize} from "sequelize"
import { PostDocument, generateModel } from "./MysqlPostModel";

export class MysqlService{
    private postModel:ModelCtor<Model<any, any>> |null =null

    async connect() {
      const url =`mysql://${process.env.MYSQL_DB_USER}:${process.env.MYSQL_DB_PASS}@${process.env.MYSQL_DB_HOST}:${process.env.MYSQL_DB_PORT}/${process.env.MYSQL_DB_DATABASE}`


        const sequelize = new Sequelize(url, {
            dialect: 'mysql',
          })
         await sequelize.authenticate()
         this.postModel = generateModel(sequelize)
         sequelize.sync({force:true})
      }
    
      async findOne(id: string): Promise<PostDocument | null> {
        if(!this.postModel) {
            throw new Error("Missing post model")
        }
        return await this.postModel.findOne({ where: { id } }) as PostDocument|null
      }
    
      async findAll(): Promise<PostDocument[]> {
        if(!this.postModel) {
            throw new Error("Missing post model")
        }
        return await this.postModel.findAll() as PostDocument[] | []
      }
    
      async create(
        title: string,
        text: string,
        publishedAt: Date,
        id: string
      ): Promise<PostDocument | null> {
        if(!this.postModel) {
            throw new Error("Missing post model")
        }
        return await this.postModel.create({
          title,
          text,
          id,
          publishedAt,
        }) as any as PostDocument
      }
}