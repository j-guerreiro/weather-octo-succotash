import { search } from "../../API/search";
import {
    StyledForm,
    StyledFormInnerContainer,
    StyledFormInput,
    StyledFormTitle,
    StyledModalCloseButton,
    StyledFormOuterContainer
} from "./style";

/**
 * Handler for closing/hiding the modal.
 */
const CloseModalButton = () => {

    const closeModalHandler = () => {
        console.log("close")
    }

    return (
        <StyledModalCloseButton
            onClick={closeModalHandler}>X
        </StyledModalCloseButton>
    )
}

export const SearchModal = () => {
    return (
        <StyledFormOuterContainer>
            <StyledFormInnerContainer>
                <CloseModalButton />
                <StyledFormTitle>Search Location 🌐</StyledFormTitle>
                <StyledForm action={search}>
                    <StyledFormInput className='form-input' name="query" />
                    <button type='submit'>🔎︎</button>
                </StyledForm>
            </StyledFormInnerContainer>
        </StyledFormOuterContainer>
    )
}