import QnACardBoard from "../items/QnACardBoard";

function QnAList({qnaPosts}) {

  return (
    <>
        { Array.isArray(qnaPosts) && qnaPosts.map(qna => <QnACardBoard key={ qna.qnaId } qna={ qna }/>) }
    </>
  );
}

export default QnAList;