import { GET_RALLYLIST } from "../modules/RallyModule";
import rallys from '../data/Rally.json';
import { useSelector } from "react-redux";

export const callRallyListAPI = ({currentPage}) => {

    let URL;

    if(currentPage !== undefined || currentPage !== null) {
        URL = `/api/v1/rallies?page=${currentPage}`;
    } else {
        URL = 'api/v1/rallies';
    }

    console.log('[RallyAPICalls] URL : ', URL);

    return async (dispatch, getState) => {
        
        const result = await fetch(URL, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Accept": "*/*"
            }
        })
        .then(response => response.json());

        if(result.httpStatus === 200) {
            console.log('[RallyAPICalls] callRallyListAPI RESULT : ', result.results);
            dispatch({ type: GET_RALLYLIST, payload: result.results.rallyList.content });
        }
    };
}

export function getRallyList() {

    const result = [...rallys].reverse();

    return result;
}

export function getRallyDetail(rallyCode) {

    return rallys.filter(rally => rally.rallycode === parseInt(rallyCode))[0];
}

export function searchRally({ form }) {

    return null;
}

export function getUserRallyCurrentRecruiting(membernickname) { // 최종적으론 멤버코드 될 예정

    // return ([...rallys].reverse()).filter(rally => rally.rallymaster === parseInt(membercode));
    return ([...rallys].reverse()).filter(rally => rally.rallymaster == membernickname 
        && (rally.rallystatus == 'in_process' || rally.rallystatus == 'ready' || rally.rallystatus == 'cancel'));
}