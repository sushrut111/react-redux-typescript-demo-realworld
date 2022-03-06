import {
  REGISTRATION_COMPLETED,
  REGISTRATION_OPENED,
  REGISTRATION_STARTED,
  UPDATE_REGISTER_FIELD,
  REGISTRATION_FAILED,
} from "../constants/actionTypes";
import Status from "../types/status";

export default (state = {}, action: any) => {
  switch (action.type) {
    case UPDATE_REGISTER_FIELD:
      return {
        ...state,
        [action.key]: action.value,
      };
    case REGISTRATION_COMPLETED:
      return {
        ...state,
        status: Status.COMPLETED,
      };
    case REGISTRATION_OPENED:
      return {
        ...state,
        status: Status.NOT_STARTED,
      };
    case REGISTRATION_STARTED:
      return {
        ...state,
        status: Status.IN_PROGRESS,
      };
    case REGISTRATION_FAILED:
      return {
        ...state,
        status: Status.FAILED,
      };
    default:
      return state;
  }
};
