import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  height: 100vh;
`

export const LeftSide = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: #121212;
  flex: 1;

  @media (max-width: 30rem) {
    display: none;
  }
`

export const Title = styled.h2`
  color: white;
  font-size: 4rem;
`

export const RightSide = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: white;
  flex: 1;
  padding: 0 1rem;
`
