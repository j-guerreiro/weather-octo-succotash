import { search } from "../../API/search";
import {
    StyledForm,
    StyledFormInnerContainer,
    StyledFormInput,
    StyledFormTitle,
    StyledModalCloseButton,
    StyledFormOuterContainer
} from "./style";

interface modalProps {
    modalState: boolean;
    setModalState: (modalState: boolean) => void;
}

/**
 * Handler for closing/hiding the modal.
 */
const CloseModalButton = ({ modalState, setModalState }: modalProps) => {

    const closeModalHandler = () => {
        if (modalState) {
            setModalState(false);
        }
    }

    return (
        <StyledModalCloseButton
            onClick={closeModalHandler}>X
        </StyledModalCloseButton>
    )
}

const ModalForm = ({ modalState, setModalState }: modalProps) => {

    if (modalState) {
        return (
            <StyledFormOuterContainer>
                <StyledFormInnerContainer>
                    <CloseModalButton modalState={modalState} setModalState={setModalState} />
                    <StyledFormTitle>Search Location 🌐</StyledFormTitle>
                    <StyledForm action={search}>
                        <StyledFormInput className='form-input' name="query" />
                        <button type='submit'>🔎︎</button>
                    </StyledForm>
                </StyledFormInnerContainer>
            </StyledFormOuterContainer>
        )
    }
}

export const SearchModal = ({ modalState, setModalState }: modalProps) => {
    return (
        <ModalForm
            modalState={modalState}
            setModalState={setModalState}
        />
    )
}