import { AxiosResponse } from "axios";

export default interface IApiClientBase {
    get: (url: string, headers?: any) => Promise<AxiosResponse<any, any>>;
    post: (
      url: string,
      data: any,
      headers?: any
    ) => Promise<AxiosResponse<any, any>>;
  }