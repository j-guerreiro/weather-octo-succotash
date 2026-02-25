import styled from '@emotion/styled';

export const StyledForm = styled.form`
  align-items: center;
  display: flex;
  flex-direction: row;
  padding: 20px;
  margin: 20px;
`;

export const StyledFormTitle = styled.h1`
  font-size: 16px;
  border: 1px solid #031820;
  padding: 1rem;
  border-radius: 8px;
`

export const StyledFormInput = styled.input`
  margin: 10px;
  padding: 5px;
  height: 1.5rem;
  
  @media (min-width: 616px) {
    width: 400px;
  }
`;

export const StyledFormOuterContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  cursor: pointer;
`

export const StyledFormInnerContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 1px solid #2196F3;
  border-radius: 5px;
  box-shadow: 0 0 4px 0px #2862ca;
  background-color: rgba(0, 0, 0, 0.7);
  backdrop-filter: blur(15px);
  padding: 10px;
  margin: 10px;
`;

export const StyledModalCloseButton = styled.button`
  align-self: end;
`