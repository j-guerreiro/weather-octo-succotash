import { search } from "../../API/search";
import { StyledForm, StyledFormInput } from "./style";

export const SearchModal = () => {
    return (
        <>
            <StyledForm action={search}>
                <div className='form-info'>Search Location 🌐</div>
                <StyledFormInput className='form-input' name="query" />
                <button type='submit'>🔎︎</button>
            </StyledForm>
        </>
    )
}