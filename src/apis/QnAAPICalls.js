import qnas from '../data/QnA.json';

export function getQnAList() {

    const result = [...qnas].reverse();

    return result;
}

export function getQnADetail(qnaCode) {

    return qnas.filter(qna => qna.qnacode === parseInt(qnaCode))[0];
}

export function searchQnA(qnatitle) {

    return qnas.filter(qna => qna.qnatitle.match(qnatitle));
}