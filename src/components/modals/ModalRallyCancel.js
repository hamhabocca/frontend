import { useDispatch, useSelector } from 'react-redux';
import Modal from 'react-modal';
import { closeModal, open_CancelRecruitModalOk } from "../../modules/ModalsModule";
import ModalRallyCancelOk from './ModalRallyCancelOK';
import styles from './Modal.module.css';
import { callCancelParticipateRallyAPI } from '../../apis/ParticipateAPICalls';


function ModalRallyCancel({rallyId}) {

    const dispatch = useDispatch();
    const isOpen = useSelector(state => state.modalsReducer.cancelRecruitState);

    const cancelRecruitStateOk = useSelector(state => state.modalsReducer.cancelRecruitStateOk);

    return (
        <Modal isOpen={isOpen} ariaHideApp={false} className={styles.modal} style={{ overlay: { backgroundColor: 'rgba(0, 0, 0, 0.5)', zIndex: '98' } }}>

            <div>
                <div className={styles.header}>
                    <h3>랠리 참가 취소</h3>
                </div>
                <div className={styles.info}>
                    <h2>랠리팀</h2>
                    <br />
                    <h4>랠리 신청을 취소하시겠습니까?</h4>
                    <h5 className={styles.text}> 잦은 취소는 이용자의 서비스 활동이 제한될 수 있습니다.</h5>
                    <div>
                        <button 
                        className={styles.nagetive} 
                        onClick={() => { 
                            dispatch(open_CancelRecruitModalOk());
                            dispatch(callCancelParticipateRallyAPI({rallyId: rallyId}));
                        }}>랠리 취소</button>
                        {cancelRecruitStateOk && <ModalRallyCancelOk />}
                        <button className={styles.close} onClick={() => dispatch(closeModal())} >닫기</button>
                    </div>
                </div>
            </div>
        </Modal>
    );
}
export default ModalRallyCancel;