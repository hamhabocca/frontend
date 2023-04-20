import Modal from 'react-modal';
import { useDispatch, useSelector } from 'react-redux';
import { closeModal, OPEN_OK } from "../../modules/ModalsModule";
import ModalRallyRecruitmentCancelOk from './ModalRallyRecruitmentCancelOk';
import styles from './Modal.module.css';
import { callModifyRallyAPI } from '../../apis/RallyAPICalls';

function ModalRallyRecruitmentCancel({ rallyId }) {

    const dispatch = useDispatch();
    const isOpen = useSelector(state => state.modalsReducer.cancelRallyState);
    const okIsOpen = useSelector(state => state.modalsReducer.oKState);

    // 상태변경
    const onClickRallyStatusUpdateHandler = (status) => {

        const formData = new FormData();
        formData.append("rallyStatus", status);

        dispatch(callModifyRallyAPI({
            form: formData,
            rallyId: rallyId
        }));

    }

    return (
        <Modal isOpen={isOpen} ariaHideApp={false} className={styles.modal} style={{ overlay: { backgroundColor: 'rgba(0, 0, 0, 0.5)', zIndex: '98' } }}>

            <div>
                <div className={styles.header}>
                    <h3>랠리 모집 취소</h3>
                </div>
                <div className={styles.info}>
                    <h4> 모집한 랠리를 정말 취소하시겠습니까?</h4>
                    <br />
                    <h6 className={styles.text}> * 취소 한 후에는 되돌릴 수 없습니다! <br /> * 잦은 취소는 이용자의 서비스 활동이 제한될 수 있습니다. </h6>
                    <div>
                        <button
                            className={styles.ok}
                            onClick={() => {
                                onClickRallyStatusUpdateHandler("취소됨");
                                dispatch({type: OPEN_OK});
                            }
                            }>
                            취소하기
                        </button>
                        {okIsOpen && <ModalRallyRecruitmentCancelOk />}
                        <button className={styles.close} onClick={() => dispatch(closeModal())} >취소</button>
                    </div>
                </div>
            </div>
        </Modal>
    );
}
export default ModalRallyRecruitmentCancel;