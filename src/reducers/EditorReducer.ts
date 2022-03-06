import {
  UPDATE_EDITOR_FIELD,
  ARTICLE_CREATED,
  ARTICLE_CREATION_STARTED,
  EDITOR_OPENED,
} from "../constants/actionTypes";
import Status from "../types/status";

export default (state: any = {}, action: any) => {
  switch (action.type) {
    case UPDATE_EDITOR_FIELD:
      console.log(action);
      return {
        ...state,
        [action.key]: action.value,
      };
    case ARTICLE_CREATED:
      return {
        ...state,
        status: Status.COMPLETED,
      };
    case ARTICLE_CREATION_STARTED:
      return {
        ...state,
        status: Status.IN_PROGRESS,
      };
    case EDITOR_OPENED:
      return {
        ...state,
        status: Status.NOT_STARTED,
      };
    default:
      return state;
  }
};
