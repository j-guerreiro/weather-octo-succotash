import { search } from "../../API/search";
import { CloseModalButton } from "../ModalHandler";
import {
    StyledForm,
    StyledFormContainer,
    StyledFormInput,
    StyledFormTitle
} from "./style";

export const SearchModal = () => {
    return (
        <>
            <StyledFormContainer>
                <CloseModalButton />
                <StyledFormTitle>Search Location 🌐</StyledFormTitle>

                <StyledForm action={search}>
                    <StyledFormInput className='form-input' name="query" />
                    <button type='submit'>🔎︎</button>
                </StyledForm>
            </StyledFormContainer>

        </>
    )
}