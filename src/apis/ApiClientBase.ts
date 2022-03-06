import axios, { AxiosInstance, AxiosRequestConfig } from "axios";
import ConfigContainer from "./ConfigContainer";
import IApiClientBase from "./IApiClientBase";

export default class ApiClientBase implements IApiClientBase {
    private axiosInstance: AxiosInstance;
    private defaultHeaders = {
      "Content-Type": "application/json",
    };
    constructor(apiBaseUrl: string) {
      this.axiosInstance = axios.create({
        baseURL: apiBaseUrl,
      });
    }
  
    private getRequestConfigWithHeadersAndAuth = (
      incomingHeaders: any
    ): AxiosRequestConfig => {
      let headers: any = {
        ...this.defaultHeaders,
        ...incomingHeaders,
      };
      if (ConfigContainer.jwtToken) {
        headers["Authorization"] = `Token ${ConfigContainer.jwtToken}`;
      }
      return {
        headers,
      };
    };
  
    public get = (url: string, headers: any = {}) => {
      return this.axiosInstance.get(
        url,
        this.getRequestConfigWithHeadersAndAuth(headers)
      );
    };
  
    public post = (url: string, data: any, headers: any = {}) => {
      return this.axiosInstance.post(
        url,
        data,
        this.getRequestConfigWithHeadersAndAuth(headers)
      );
    };
  }
  