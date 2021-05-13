import { Sequelize, DataTypes } from "sequelize";

export interface PostDocument {
  id: string;
  title: string;
  text: string;
  publishedAt: Date;
}

export const generateModel = (sequlizeInstance: Sequelize) => {
  const PostModel = sequlizeInstance.define("Post", {
    id: {
      type: DataTypes.STRING,
      unique: true,
      primaryKey:true
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    text: {
      type: DataTypes.STRING,
    },
    publishedAt: {
      type: DataTypes.DATE,
    },
  });

  return PostModel;
};
