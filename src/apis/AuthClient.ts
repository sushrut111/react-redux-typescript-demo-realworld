import Registration from "../types/Registration";
import IApiClientBase from "./IApiClientBase";
import IAuthClient from "./IAuthClient";

export default class AuthClient implements IAuthClient {
    private _apiClient: IApiClientBase;
    constructor(apiClient: IApiClientBase) {
      this._apiClient = apiClient;
    }
    public current = () => {
      return this._apiClient.get("/user");
    };
    public login = (email: string, password: string) => {
      return this._apiClient.post("/users/login", { user: { email, password } });
    };
    public register = (user: Registration) => {
      return this._apiClient.post("users", { user });
    };
  }