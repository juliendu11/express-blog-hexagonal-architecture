import { APIAdapter } from "./application/api/APIAdapter";
import { CreatePost } from "./domain/Blog/UseCase/CreatePost";
import { GetAllPosts } from "./domain/Blog/UseCase/GetAllPosts";
import { GetOnePost } from "./domain/Blog/UseCase/GetOnePost";
import { MongoDBAdapter } from "./infrastructure/mongodb/MongoDBAdapter";
import { MongoDBService } from "./infrastructure/mongodb/MongoDBService";
import { MysqlAdapter } from "./infrastructure/mysql/MysqlAdapter";
import { MysqlService } from "./infrastructure/mysql/MysqlService";

async function launch() {
  // Secondary adapter MongoDB
  const mongoDBService = new MongoDBService();
  await mongoDBService.connect();
  const mongoDBAdapater = new MongoDBAdapter(mongoDBService);

   // Secondary adapter Mysql
  // const mysqlDBService = new MysqlService();
  // await mysqlDBService.connect();
  // const mysqlDBAdapater = new MysqlAdapter(mysqlDBService);

  // Instantiating the hexagon and injecting the secondary adapter
  var createPost = new CreatePost(mongoDBAdapater);
  var getAllPosts = new GetAllPosts(mongoDBAdapater);
  var getOnePost = new GetOnePost(mongoDBAdapater);

  // Primary adapter
  var apiAdapter = new APIAdapter(createPost, getAllPosts, getOnePost);

  apiAdapter.launchExpressAPP();
}

launch();
