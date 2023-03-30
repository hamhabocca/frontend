import rallys from '../data/Rally.json';

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