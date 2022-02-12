import { all } from "redux-saga/effects";
import { ArticlesSaga } from "./saga/ArticlesSaga";
import { LoginSaga } from "./saga/LoginSaga";

export default function* rootSaga () {
    yield all([
        LoginSaga(),
        ArticlesSaga()
    ])
} 