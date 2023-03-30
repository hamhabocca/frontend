import rallys from '../data/Rally.json';

export function getRallySearchResult(searchParams) {

    // console.log(searchParams.split('&'));

    let paramList = searchParams.split('&');

    console.log(paramList)

    paramList = paramList.map(param => param.split('='));

    console.log(paramList)

    let rallytype = '';

    switch(paramList.length) {
        /* 타입까지 옴 */
        case 6: 
            if(paramList[0][1] == 'ipmun') {
                rallytype = '입문';
            } else {
                console.log('입문이 아니당~');
                rallytype = 'chobo';
            }
            // const rallytype = paramList[0][1];
            const sido = paramList[1][1];
            const sigungu = paramList[2][1];
            const rallydate = paramList[3][1];
            const distance = paramList[4][1];
            const people = paramList[5][1];


            return rallys.filter(rally => rally.rallytype == rallytype);
        /* 타입은 안 옴 */
        case 5: 

    }
}

// console.log(uriNew.split('&'));
// console.log(uriNew.split('&')[0].slice((uriNew.split('&')[0].indexOf('=')+1)));

// members.filter(member => member.membercode === parseInt(membercode))[0]

// 'member.membercode === parseInt(membercode)'.replace("<script","");
// member.membercode === parseInt(membercode)