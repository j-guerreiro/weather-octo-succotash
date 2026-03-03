import styled from '@emotion/styled';

export const StyledForm = styled.form`
  align-items: center;
  display: flex;
  flex-direction: row;
  padding: 5px;
  margin: 5px;
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
  backdrop-filter: blur(15px);
  
  {/* Funny Animation when opening the modal */}
  animation-duration: .2s;
  animation-name: slide-in-fast;
  @keyframes slide-in-fast {
    from {
      translate: 0 0 150vw;
      scale: 200% 1;
    }

    to {
      translate: 0 0;
      scale: 100% 1;
    }
  }
}
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

// dropdown of matching places under the input field
export const SuggestionsContainer = styled.ul`
  list-style: none;
  padding: 0;
  margin: 5px 0 0;
  max-height: 150px;
  width: 100%;
  max-width: 400px; /* roughly the same as the input's wide breakpoint */
  overflow-y: auto;
  background: #fff;
  color: #000;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.2);
`;

export const SuggestionItem = styled.li<{ highlighted: boolean }>`
  padding: 8px;
  cursor: pointer;
  background: ${props => (props.highlighted ? '#ddd' : 'transparent')};
  &:hover {
    background: #eee;
  }
`;

export const WeatherResult = styled.div`
  margin: 10px;
  padding: 10px;
  font-size: 1.3rem;
  color: #fff;
  border: 1px solid #2d2d2d;;
  border-radius: 5px;
  box-shadow: 0 0 4px 0px #2862ca;
`;

export const Loader = styled.div`
  margin-top: 10px;
  width: 24px;
  height: 24px;
  border: 3px solid rgba(255, 255, 255, 0.3);
  border-top-color: #fff;
  border-radius: 50%;
  animation: spin 1s linear infinite;

  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }
`;

