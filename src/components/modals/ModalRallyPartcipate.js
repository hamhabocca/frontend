import Modal from 'react-modal';
import { useDispatch, useSelector } from 'react-redux';
import { closeModal, open_RecruitOkModal } from "../../modules/ModalsModule";
import ModalParticipateOk from './ModalParticipateOk';
import styles from './Modal.module.css';

function ModalRallyPartcipate() {

    const dispatch = useDispatch();
    const isOpen = useSelector(state => state.modalsReducer.recruitState);

    const recruitStateOk = useSelector(state => state.modalsReducer.recruitStateOk);

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
                        <button className={styles.ok} onClick={() => { dispatch(open_RecruitOkModal()) }}>확인</button>
                        {recruitStateOk && <ModalParticipateOk />}
                        <button className={styles.close} onClick={() => dispatch(closeModal())}>취소</button>
                    </div>
                </div>
            </div>

        </Modal>
    );
}
export default ModalRallyPartcipate;