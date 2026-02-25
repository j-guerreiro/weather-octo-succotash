import { StyledFooter } from './style';

interface footerProps {
    children: React.ReactNode;
}

export const Footer = ({ children }: footerProps) => {
    return (
        <StyledFooter>
            {children}
        </StyledFooter>
    )
}
