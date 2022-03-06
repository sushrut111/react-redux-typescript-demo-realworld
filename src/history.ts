import { createBrowserHistory } from "history";

export default class SingletonHistory {
  private static _history: any = null;
  static getHistoryObject = () => {
    if (SingletonHistory._history === null) {
      SingletonHistory._history = createBrowserHistory();
    }
    return SingletonHistory._history;
  };
}