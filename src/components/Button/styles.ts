import styled from 'styled-components'

export const Wrapper = styled.button`
  flex: 1;
  background: #f0ab20;
  color: white;
  border: 0;
  font-size: 1.6rem;
  padding: 0.5rem 2rem;
  cursor: pointer;
  border-radius: 0.5rem;
  transition: filter 0.3s;

  &:hover {
    filter: brightness(1.1);
  }
`
