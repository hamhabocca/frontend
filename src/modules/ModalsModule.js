import { createActions, handleActions } from "redux-actions";

const initialState = false;

export const OPEN_RECRUIT_LIST = 'modal/OPEN_RECRUIT_LIST';
export const OPEN_PARTICIPATE = 'modal/OPEN_PARTICIPATE';
export const OPEN_PARTICIPATE_OK = 'modal/OPEN_PARTICIPATE_OK'
export const OPEN_CANCEL_PARTICIPATE = 'modal/OPEN_CANCEL_PARTICIPATE';
export const OPEN_CANCEL_PARTICIPATE_OK = 'modal/OPEN_CANCEL_PARTICIPATE_OK';
export const OPEN_CANCEL_RALLY = 'modal/OPEN_CANCEL_RALLY';
export const OPEN_OK = 'modal/OPEN_OK';
export const OPEN_REPORT = 'modal/OPEN_REPORT';
export const OPEN_PROFILE = 'modal/OPEN_PROFILE';
export const OPEN_REGISTER = 'modal/OPEN_REGISTER';
export const OPEN_DELETE_ACCOUNT = 'modal/OPEN_DELETE_ACCOUNT';
export const OPEN_DELETE_OK_ACCOUNT = 'modal/OPEN_DELETE_OK_ACCOUNT';
export const OPEN_DELETE_POST = 'modal/OPEN_DELETE_POST';
export const OPEN_DELETE_OK_POST = 'modal/OPEN_DELETE_OK_POST';

export const closeModal = () => ({
    type: 'CLOSE_MODAL',
    payload: { ...initialState }
});

const modalsReducer = handleActions({
    [OPEN_RECRUIT_LIST]: () => {
        return {
            recruitListState: true
        };
    },
    [OPEN_PARTICIPATE]: () => {
        return {
            participateState: true
        };
    },
    [OPEN_PARTICIPATE_OK]: () => {
        return {
            participateOkState: true
        };
    },
    [OPEN_CANCEL_PARTICIPATE]: () => {
        return {
            cancelParticipateState: true
        };
    },
    [OPEN_CANCEL_RALLY]: () => {
        return {
            cancelRallyState: true
        };
    },
    [OPEN_OK]: () => {
        return {
            okState: true
        };
    },
    [OPEN_REPORT]: () => {
        return {
            reportState: true
        };
    },
    [OPEN_PROFILE]: () => {
        return {
            profileState: true
        };
    },
    [OPEN_REGISTER]: () => {
        return {
            registerState: true
        };
    },
    [OPEN_DELETE_ACCOUNT]: () => {
        return {
            deleteAccountState: true
        };
    },
    [OPEN_DELETE_OK_ACCOUNT]: () => {
        return {
            deleteOkAccountState: true
        };
    },
    [OPEN_DELETE_POST]: () => {
        return {
            deletePostState: true
        };
    },
    [OPEN_DELETE_OK_POST]: () => {
        return {
            deleteOkPostState: true
        };
    },
    'CLOSE_MODAL': (state, payload) => {
        return payload;
    }
}, initialState);

export default modalsReducer;