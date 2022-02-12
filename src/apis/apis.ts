import Post from '../types/Post';
import axios, { AxiosRequestConfig } from 'axios';

const API_ROOT = 'https://api.realworld.io/api';

let token : any = null;
const tokenPlugin = (cnf: AxiosRequestConfig) => {
  if (token) {
    cnf.headers = {
      ...cnf.headers,
      'Authorization': `Token ${token}`
    }
  }
  return cnf;
}

export const setToken = (_token: string) => {
  token = _token;
}

const getHeaders = () : AxiosRequestConfig => {
  return {
    headers: {
      'Content-Type': 'application/json',
    }
  }
}

const instance = axios.create({
  baseURL: API_ROOT
});

instance.interceptors.request.use(tokenPlugin);

const requests = {
  get: (url: any) => instance.get(url, getHeaders()),
  post: (url: any, data: any) => instance.post(url, data, getHeaders())
}

export const Auth = {
  current: () =>
    requests.get('/user'),
  login: (email: string, password: string) =>
    requests.post('/users/login', { user: { email, password } }),
};

const limit = (count: number, p: number) => `limit=${count}&offset=${p ? p * count : 0}`;
const omitSlug = (article: any) => Object.assign({}, article, { slug: undefined })
export const Articles = {
  all: (page: number) =>
    requests.get(`/articles?${limit(10, page)}`),
  create: (article: Post) =>
    requests.post('/articles', { article })
};

export const Tags = {
  get: () => requests.get('/tags')
}