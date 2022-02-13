import { push } from "connected-react-router";
import { call, put, takeLatest } from "redux-saga/effects";
import { NetworkCalledFailedAction, SuccessnNotification } from "../actions/common";
import { Articles, Tags } from "../apis/apis";
import { ARTICLES_FETCHED, ARTICLE_CREATED, ARTICLE_CREATION_STARTED, CREATE_ARTICLE, REQUEST_ARTICLES, REQUEST_TAGS, TAGS_FETCHED } from "../constants/actionTypes";

function* GetTags(action: any): Generator<any> {
    try{
        const resp: any = yield call(Tags.get);
        yield put({type: TAGS_FETCHED, payload: resp.data});
    } catch(e: any) {
        // yield put(NetworkCalledFailedAction(e.response.data))
    }
}

function* GetArticles(action: any): Generator<any> {
    try{
        const resp: any = yield call(Articles.all, action.payload.page);
        yield put({type: ARTICLES_FETCHED, payload: resp.data});
    } catch(e: any) {
        // yield put(NetworkCalledFailedAction(e.response.data))
    }
}

function* CreateArticle(action: any): Generator<any> {
    try{
        yield put({type: ARTICLE_CREATION_STARTED})
        const resp: any = yield call(Articles.create, action.payload);
        yield put(SuccessnNotification("Article created successfully!"));
        yield put({type: ARTICLE_CREATED})
        yield put(push('/'))
    } catch(e: any) {
        yield put(NetworkCalledFailedAction(e.response.data));
    }
}

export function* ArticlesSaga() {
    yield takeLatest(REQUEST_TAGS, GetTags);
    yield takeLatest(REQUEST_ARTICLES, GetArticles);
    yield takeLatest(CREATE_ARTICLE, CreateArticle);

}