import {
    StyledHeader,
    StyledAppTitle,
    StyledNav,
} from './style';

export const Header = () => {
    return (
        <>
            <StyledHeader>
                <StyledAppTitle>weather forecast app</StyledAppTitle>
                <StyledNav>
                    <ul>
                        <li><a href="">home</a></li>
                        <li><a href="">about</a></li>
                    </ul>
                </StyledNav>
            </StyledHeader>
        </>
    )
}