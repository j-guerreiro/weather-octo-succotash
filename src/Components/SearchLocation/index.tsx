import './index.css';

const openModal = () => {
    console.log('Opens modal');
}

export const SearchLocation = () => {
    return (
        <>
            <div className="button-container">
                <button type='submit' onClick={openModal}>🔎︎ Search</button>
            </div>
        </>
    )
}