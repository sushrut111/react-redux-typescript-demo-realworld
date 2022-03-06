import { API_ROOT } from "../constants/api";
import ConfigContainer from "./ConfigContainer";
import ApiClientBase from "./ApiClientBase";
import ArticlesClient from "./ArticlesClient";
import AuthClient from "./AuthClient";
import IArticlesClient from "./IArticlesClient";
import IAuthClient from "./IAuthClient";
import ITagsClient from "./ITagsClient";
import TagsClient from "./TagsClient";


export const setToken = (_token: string | null) => {
  ConfigContainer.jwtToken = _token;
};

const apiClientBase = new ApiClientBase(API_ROOT);

export const Auth: IAuthClient = new AuthClient(apiClientBase);

export const Articles: IArticlesClient = new ArticlesClient(apiClientBase)

export const Tags: ITagsClient = new TagsClient(apiClientBase);
