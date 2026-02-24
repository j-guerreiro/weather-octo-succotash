import { StyledButtonContainer } from './style';
import { SearchModal } from '../SearchModal';
import { useState } from 'react';

interface OpenModalButtonProps {
    clickHandler: () => void;
    children: string;
}

const OpenModalButton = ({
    clickHandler, children
}: OpenModalButtonProps) => {
    return (
        <StyledButtonContainer>
            <button
                onClick={clickHandler}>
                {children}
            </button>
        </StyledButtonContainer >
    )
}

/**
 * Button component that opens the search location modal.
 */
export const ModalOpenerButton = () => {
    // Default modal state (closed).
    const [isActive, setIsActive] = useState(false);

    const openModalHandler = () => {
        setIsActive(true);
    }

    return (
        <>
            <OpenModalButton
                clickHandler={openModalHandler}
            >
                Search
            </OpenModalButton>
            {isActive ? <SearchModal /> : ''}
        </>
    )
}