import Post from "../types/Post";
import IApiClientBase from "./IApiClientBase";
import IArticlesClient from "./IArticlesClient";

export default class ArticlesClient implements IArticlesClient {
    private _apiClient: IApiClientBase;
    constructor(apiClient: IApiClientBase) {
      this._apiClient = apiClient;
    }
  
    private calculateLimitByOffsetAndPage = (count: number, page: number) =>
      `limit=${count}&offset=${page ? page * count : 0}`;
  
    public all = (page: number) => {
      return this._apiClient.get(
        `/articles?${this.calculateLimitByOffsetAndPage(10, page)}`
      );
    };
    public create = (article: Post) => {
      return this._apiClient.post("/articles", { article });
    };
  }
  