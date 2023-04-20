import { createActions, handleActions } from 'redux-actions';

/* 초기값 */
const initialState = [];

/* 액션 */
export const GET_MEMBER     = 'member/GET_MEMBER';
export const POST_LOGIN     = 'member/POST_LOGIN';
export const POST_REGISTER  = 'member/POST_REGISTER';

const actions = createActions({
    [GET_MEMBER]: () => {},
    [POST_LOGIN]: () => {},
    [POST_REGISTER]: () => {}
});

// export const get_member = (value) => ({
//     type: GET_MEMBER,
//     payload: { result: value }
// });

// export const post_login = (value) => ({
//     type: POST_LOGIN,
//     payload: { result: value }
// });

// export const post_register = (value) => ({
//     type: POST_REGISTER,
//     payload: { result: value }
// });


/* 리듀서 */
const memberReducer = handleActions(
    {
        [GET_MEMBER]: (state, { payload }) => {
            return payload;
        },
        [POST_LOGIN]: (state, { payload: {result} }) => {
            return {
                ...state,
                postLoginState: result
            }
        },
        [POST_REGISTER]: (state, { payload }) => {
            
            return payload;
        },

    },
    initialState
);

export default memberReducer;