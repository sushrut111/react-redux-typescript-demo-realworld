import { AxiosResponse } from "axios";
import Registration from "../types/Registration";

export default interface IAuthClient {
    current: () => Promise<AxiosResponse<any, any>>;
    login: (email: string, password: string) => Promise<AxiosResponse<any, any>>;
    register: (user: Registration) => Promise<AxiosResponse<any, any>>;
  }
  