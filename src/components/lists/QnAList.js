import QnACardBoard from "../items/QnACardBoard";

function QnAList({qnaPosts}) {

  return (
    <>
        { qnaPosts.map(qna => <QnACardBoard key={ qna.qnacode } qna={ qna }/>) }
    </>
  );
}

export default QnAList;