import Textfield from '../Textfield'
import Button from '../Button'
import * as S from './styles'
import Link from 'next/link'

const FormSignUp = () => (
  <S.Wrapper>
    <S.Title>Create Account</S.Title>
    <S.WrapperInputsSignUp>
      <S.FirstNameWrapper>
        <Textfield
          type="text"
          placeholder="John"
          aria-label="Digite seu nome"
        />
      </S.FirstNameWrapper>
      <S.LastNameWrapper>
        <Textfield
          type="text"
          placeholder="Doe"
          aria-label="Digite seu ultimo nome"
        />
      </S.LastNameWrapper>
      <S.EmailWrapper>
        <Textfield type="email" />
      </S.EmailWrapper>
      <S.PasswordWrapper>
        <Textfield type="password" />
      </S.PasswordWrapper>
      <S.ConfirmPassworWrapper>
        <Textfield type="password" aria-label="Confirme sua senh" />
      </S.ConfirmPassworWrapper>
    </S.WrapperInputsSignUp>
    <Button>Sign up</Button>
    <S.TextLink>
      Already a member?{' '}
      <Link href="/">
        <a>Sign In</a>
      </Link>
    </S.TextLink>
  </S.Wrapper>
)

export default FormSignUp
