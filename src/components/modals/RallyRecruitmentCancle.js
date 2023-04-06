import { useDispatch, useSelector } from 'react-redux';
import Modal from 'react-modal';
import styles from './RallyRecruitmentCancle.module.css';
import { closeModal } from "../../modules/ModalsModule";

function RallyRecruitmentCancle() {
    
    const dispatch = useDispatch();
    const isOpen = useSelector(state => state.modalsReducer.cancelRecruitState2);

    return (
        <Modal isOpen={isOpen} ariaHideApp={false} className={styles.modal} style={{ overlay: { backgroundColor: 'rgba(0, 0, 0, 0.5)', zIndex: '98' } }}>
    
            <div>
                <div className={styles.header}>
                    <h3>랠리 모집 취소</h3>
                </div>
                <div className={styles.info}>
                    <h4> 정말로 모집한 랠리를 취소하시겠습니까?</h4>
                    <br/>
                    <h6 className={styles.text}> * 취소 한 후에는 되돌릴 수 없습니다! <br/> * 잦은 취소는 이용자의 서비스 활동이 제한될 수 있습니다. </h6> 
                    
                    <input type='button' className={styles.ok} value='확인'/>
                    <input type='button' className={styles.close} onClick={() => dispatch(closeModal())} value='취소'/>
                </div>
            </div>
       </Modal>
    );
}
export default RallyRecruitmentCancle;