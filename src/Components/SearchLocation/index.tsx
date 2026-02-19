import './index.css';
import { search } from '../../API/search';

export const SearchLocation = () => {
    return (
        <>
            <form action={search} className="search-location-form">
                Search for current weather ⛅
                <input className='form-input' name="query" />
                <button type='submit'>Search</button>
            </form>
        </>
    )
}