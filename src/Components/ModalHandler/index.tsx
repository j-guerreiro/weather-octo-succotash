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
 * To create the modal open/close, the link below helped:
 * https://www.reddit.com/r/reactjs/comments/14k1o0x/the_most_challenging_thing_for_me_about_react_is/
 */

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
            <SearchModal modalState={isActive} setModalState={setIsActive} />
        </>
    )
}