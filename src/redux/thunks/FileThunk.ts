import { AnyAction } from "redux";
import { ThunkDispatch } from "redux-thunk";
import { ServicesAvailableAction } from "../actions/ServiceAction";
import { ApplicationStore } from "../reducers";

export const parseServiceFromFileThunk = (servicContent: string) => (dispatch: ThunkDispatch<ApplicationStore, null, AnyAction>, getState: () => ApplicationStore) => {
    dispatch(ServicesAvailableAction([]));
};
