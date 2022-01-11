import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  flex: 1;
  max-width: 30rem;
`

export const Title = styled.h2`
  font-size: 2.5rem;
`

export const WrapperInputsSignUp = styled.div`
  display: grid;
  grid-template-areas:
    'firstname lastname'
    'email email'
    'password confirm_password';

  grid-template-rows: 1fr 1fr;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;

  @media (max-width: 30rem) {
    grid-template-rows: 1fr;
    grid-template-columns: 1fr;
    grid-template-areas:
      'firstname'
      'lastname'
      'email'
      'password'
      'confirm_password';
  }
`

export const FirstNameWrapper = styled.div`
  grid-area: firstname;
`

export const LastNameWrapper = styled.div`
  grid-area: lastname;
`

export const EmailWrapper = styled.div`
  grid-area: email;
`

export const PasswordWrapper = styled.div`
  grid-area: password;
`
export const ConfirmPassworWrapper = styled.div`
  grid-area: confirm_password;
`

export const TextLink = styled.p`
  text-align: center;

  a {
    color: #f0ab20;
  }
`
