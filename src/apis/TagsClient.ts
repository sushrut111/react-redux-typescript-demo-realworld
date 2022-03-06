import IApiClientBase from "./IApiClientBase";
import ITagsClient from "./ITagsClient";

export default class TagsClient implements ITagsClient {
    private _apiClient: IApiClientBase;
    constructor(apiClient: IApiClientBase) {
      this._apiClient = apiClient;
    }
    public get = () => {
      return this._apiClient.get("/tags")
    }
  }