import styled from 'styled-components'

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
`

export const Input = styled.input`
  padding: 0.8rem 1rem;
  background: #f4f2f2;
  border: 0;
  border-radius: 0.5rem;
  flex: 1;
  transition: filter 0.3s;
  font-size: 1.125rem;

  &:focus {
    outline: 0;
    filter: brightness(0.9);
  }
`
