import MemberCardModal from '../items/MemberCardModal';

function RecruitMemberList({members}) {

  return (
    <>
        { members.map(member => <MemberCardModal key={ member.membercode } member={ member }/>) }
    </>
  );
}

export default RecruitMemberList;