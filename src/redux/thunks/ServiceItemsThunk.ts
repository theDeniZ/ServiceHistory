import { AnyAction } from "redux";
import { ThunkDispatch } from "redux-thunk";
import { ApplicationStore } from "../reducers";

export const doNothingThunk = () => (dispatch: ThunkDispatch<ApplicationStore, null, AnyAction>, getState: () => ApplicationStore) => {};
