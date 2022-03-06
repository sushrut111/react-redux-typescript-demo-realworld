import { TAGS_FETCHED, TAGS_SIDEBAR_LOADED } from "../constants/actionTypes";

export default (state: any = {}, action: any) => {
  switch (action.type) {
    case TAGS_FETCHED:
      return {
        ...state,
        tags: action.payload.tags,
      };
    default:
      return state;
  }
};
