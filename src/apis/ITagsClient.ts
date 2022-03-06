import { AxiosResponse } from "axios";

export default interface ITagsClient {
    get: () => Promise<AxiosResponse<any, any>>;
  }
  