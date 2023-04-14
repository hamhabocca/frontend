import Modal from 'react-modal';
import { useDispatch, useSelector } from 'react-redux';
import { closeModal } from '../../modules/ModalsModule';
import styles from './ModalReport.module.css';

function ModalReport() {

    const dispatch = useDispatch();
    const isOpen = useSelector(state => state.modalsReducer.reportState);

    return (
        <Modal isOpen={isOpen} ariaHideApp={false} className={styles.modal} style={{ overlay: { backgroundColor: 'rgba(0, 0, 0, 0.5)', zIndex: '98' } }}>

            <div>
                <div className={styles.header}>
                    <h3>신고 하기</h3>
                </div>
                <div className={styles.info}>

                    <div className={styles.report1}>
                        <div className={styles.text1}>
                            <h4>신고사유</h4>
                        </div>
                        <div className={styles.radio}>
                            <form className={styles.form}>
                                <input type="radio" name="report" value="ad" id="ad" /><label for="ad">광고(부적절한 홍보 및 음란성 게시글 및 댓글)</label><br />
                                <input type="radio" name="report" value="word" id="word" /><label for="word">욕설/반말/부적절한 언어 사용</label><br />
                                <input type="radio" name="report" value="member" id="member" /><label for="member">회원 비방</label><br />
                                <input type="radio" name="report" value="comment" id="comment" /><label for="comment">도배성 댓글</label><br />
                                <input type="radio" name="report" value="etc" id="etc" /><label for="etc">기타(상세 사유에 내용을 꼭 적어주세요.)</label>
                            </form>
                        </div>
                    </div>
                    <div className={styles.report2}>
                        <div className={styles.text2}>
                            <h6>신고 사유 기재해주세요(선택사항)</h6>
                        </div>
                        <div className={styles.report3}>
                            <div>
                                <h4>상세사유</h4>
                            </div>
                            <div className={styles.textarea}>
                                <form>
                                    <textarea cols="30" rows="5"></textarea>
                                </form>
                            </div>
                        </div>
                    </div>

                </div>
                <h6 className={styles.text3}>
                    * 허위신고일 경우, 신고자의 서비스 활동이 제한될 수 있으니
                    <br />
                    * 신중하게 신고해주세요.
                </h6>
                <div className={styles.button}>
                    <input type='button' className={styles.ok} value='신고하기' />
                    <input type='button' className={styles.close} onClick={() => dispatch(closeModal())} value='취소' />
                </div>
            </div>
        </Modal>
    );
}
export default ModalReport;