import { useState } from 'react';
import { StyledButtonContainer } from './style';
import { SearchModal } from '../SearchModal';

/**
 * Button component that opens the search location modal.
 */
export const ModalOpenerButton = () => {
    const [modalStatus, setModalStatus] = useState(true);

    const openModalHandler = () => {
        if (!modalStatus) {
            setModalStatus(true);
            console.log(modalStatus);
        }

        if (modalStatus === true) {
            // render modal - to improve
            return (
                <SearchModal />
            )
        }
    }

    return (
        <>
            <StyledButtonContainer>
                <button
                    onClick={openModalHandler}>
                    Search
                </button>
            </StyledButtonContainer >
            <SearchModal />
        </>
    )
}