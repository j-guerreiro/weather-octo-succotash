import { useState } from 'react';
import { StyledButtonContainer, StyledModalCloseButton } from './style';
import { SearchModal } from '../SearchModal';



export const CloseModalButton = () => {
    const closeModalHandler = () => {
        console.log("Close modal");
    }

    return (
        <StyledModalCloseButton
            onClick={closeModalHandler}>X
        </StyledModalCloseButton>
    )
}

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
            {/* <SearchModal /> */}
        </>
    )
}