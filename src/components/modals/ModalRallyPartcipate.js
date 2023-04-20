import Modal from 'react-modal';
import { useDispatch, useSelector } from 'react-redux';
import { closeModal, OPEN_PARTICIPATE_OK } from "../../modules/ModalsModule";
import ModalParticipateOk from './ModalParticipateOk';
import styles from './Modal.module.css';
import { callParticipateRallyByMateAPI } from '../../apis/ParticipateAPICalls';

function ModalRallyPartcipate({rallyId}) {

    const dispatch = useDispatch();
    const isOpen = useSelector(state => state.modalsReducer.participateState);
    const participateOkModal = useSelector(state => state.modalsReducer.participateOkState);

    return (
        <Modal isOpen={isOpen} ariaHideApp={false} className={styles.modal} style={{ overlay: { backgroundColor: 'rgba(0, 0, 0, 0.5)', zIndex: '98' } }}>

            <div>
                <div className={styles.header}>
                    <h3>랠리 참가</h3>
                </div>
                <div className={styles.info}>
                    <h2> 랠리팀</h2>
                    <br />
                    <br />
                    <h4> 랠리에 참가하시겠습니까?</h4>
                    <div>
                        <button 
                        className={styles.ok} 
                        onClick={() => { 
                            dispatch({type: OPEN_PARTICIPATE_OK}); 
                            dispatch(callParticipateRallyByMateAPI({rallyId: rallyId})); 
                            }}>확인</button>
                        {participateOkModal && <ModalParticipateOk />}
                        <button className={styles.close} onClick={() => dispatch(closeModal())}>취소</button>
                    </div>
                </div>
            </div>

        </Modal>
    );
}
export default ModalRallyPartcipate;