import { AxiosResponse } from "axios";
import Post from "../types/Post";

export default interface IArticlesClient {
    all: (page: number) => Promise<AxiosResponse<any, any>>;
    create: (article: Post) => Promise<AxiosResponse<any, any>>;
  }