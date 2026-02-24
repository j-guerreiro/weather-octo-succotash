import { StyledFooter } from './style';

interface FooterProps {
    children: React.ReactNode;
}

export const Footer = ({ children }: FooterProps) => {
    return (
        <StyledFooter>
            {children}
        </StyledFooter>
    )
}
