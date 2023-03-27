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