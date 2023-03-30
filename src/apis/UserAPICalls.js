import members from '../data/User.json';

export function getOneMember(membercode) {

    return members.filter(member => member.membercode === parseInt(membercode))[0];
}