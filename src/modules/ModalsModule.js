import { createActions, handleActions } from "redux-actions";

const initialState = {
    recruitmentListState: false,    //신청현황
    recruitState: false,            //랠리신청
    cancelRecruitState: false,      //참가취소
    cancelRecruitState2: false,     //모집취소
    reportState: false,             //신고하기
    profileState: false,            //프로필수정
    registerState:false,            //회원가입(닉네임)
    deleteAccountState:false,        //회원탈퇴
    deleteOkAccountState:false      //회원탈퇴확인
    deletePostState:false           //게시글 삭제
};

const RECRUITMENT_LIST = 'rally/RECRUITMENT_LIST';
const RECRUIT = 'rally/RECRUIT';
const CANCEL_RECRUIT = 'rally/CANCEL_RECRUIT';
const CANCEL_RECRUIT2 = 'rally/CANCEL_RECRUIT2';
const REPORT = 'member/REPORT';
const PROFILE = 'member/PROFILE';
const REGISTER = 'member/REGISTER';
const DELETE_ACCOUNT = 'member/DELETE_ACCOUNT';
const DELETE_OK_ACCOUNT = 'member/DELETE_OK_ACCOUNT';
const DELETE_POST = 'post/DELETE_POST';

export const open_RecruitmentListModal = () => ({
    type: RECRUITMENT_LIST,
    payload: { result: true }
});

export const open_RecruitModal = () => ({
    type: RECRUIT,
    payload: { result: true }
});

export const open_CancelRecruitModal = () => ({
    type: CANCEL_RECRUIT,
    payload: { result: true }
});

export const open_CancelRecruitModal2 = () => ({
    type: CANCEL_RECRUIT2,
    payload: { result: true }
});

export const open_ReportModal = () => ({
    type: REPORT,
    payload: { result: true }
});

export const open_ProfileModal = () => ({
    type: PROFILE,
    payload: { result: true }
});

export const open_RegisterModal = () => ({
    type: REGISTER,
    payload: { result: true }
});

export const open_deleteAccountModal = () => ({
    type: DELETE_ACCOUNT,
    payload: { result: true }
});

export const open_deleteOkAccountModal = () =>({
    type : DELETE_OK_ACCOUNT,
    payload : { result : true }
 });

export const open_deleteModal = () => ({
    type: DELETE_POST,
    payload: { result: true }
});

export const closeModal = () => ({
    type: 'CLOSE_MODAL',
    payload: { ...initialState }
});

const modalsReducer = handleActions({
    [RECRUITMENT_LIST] : (state, { payload: {result} }) => {
        return {
            ...state,
            recruitmentListState: result
        };
    },
    [RECRUIT] : (state, { payload: {result} }) => {
        return {
            ...state,
            recruitState: result
        };
    },
    [CANCEL_RECRUIT] : (state, { payload: {result} }) => {
        return {
            ...state,
            cancelRecruitState: result
        };
    },
    [CANCEL_RECRUIT2] : (state, { payload: {result} }) => {
        return {
            ...state,
            cancelRecruitState2: result
        };
    },
    [REPORT] : (state, { payload: {result} }) => {
        return {
            ...state,
            reportState: result
        };
    },
    [PROFILE] : (state, { payload: {result} }) => {
        return {
            ...state,
            profileState: result
        };
    },
    [REGISTER] : (state, { payload: {result} }) => {
        return {
            ...state,
            registerState: result
        };
    },
    [DELETE_ACCOUNT] : (state, { payload: {result} }) => {
        return {
            ...state,
            deleteAccountState: result
        };
    },
    [DELETE_OK_ACCOUNT] : (state, {payload : {result}}) => {
        return {
            ...state,
            deleteOkAccountState : result
        };
    },
    [DELETE_POST] : (state, { payload: {result} }) => {
        return {
            ...state,
            deletePostState: result
        };
    },
    'CLOSE_MODAL': (state, payload) => {
        return payload;
    }
}, initialState);

export default modalsReducer;