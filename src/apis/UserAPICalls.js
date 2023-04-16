import axios from 'axios';
import members from '../data/User.json';

export function getOneMember(membercode) {

    return members.filter(member => member.membercode === parseInt(membercode))[0];
}

export const getMembers = async () => {
    
    /* 백엔드에 토큰 보내기 */
    const token = window.localStorage.getItem('jwtToken');

    const requestURL = 'api/v1/members'

    // const res = await axios.get(requestURL, {
    //     headers: {
    //         "Auth": token
    //     }
    // })

    const res = await axios.get(requestURL);

    console.log(res);
}