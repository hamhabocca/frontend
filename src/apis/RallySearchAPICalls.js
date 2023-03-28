import rallys from '../data/Rally.json';

export function getRallySearchResult(searchParams) {

    console.log(searchParams.split('&'));

    let paramList = searchParams.split('&');

    paramList = paramList.map(param => param.split('='));

    // const resultList = paramList.forEach(param => {

    //     switch(param[0]) {
    //         case 'rallytype':
    //             let temp = rallys.filter(rally => rally.rallytype == param[1]);
                
    //             break;
    //         case 'sido' : 
    //     }
    // })

    // return rallys.filter(rally => rally.);
}

// console.log(uriNew.split('&'));
// console.log(uriNew.split('&')[0].slice((uriNew.split('&')[0].indexOf('=')+1)));

// members.filter(member => member.membercode === parseInt(membercode))[0]

// 'member.membercode === parseInt(membercode)'.replace("<script","");
// member.membercode === parseInt(membercode)