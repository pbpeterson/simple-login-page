import Link from 'next/link'
import Button from '../Button'
import Textfield from '../Textfield'
import * as S from './styles'

const FormSignIn = () => (
  <S.Wrapper>
    <S.Title>Sign In</S.Title>
    <Textfield type="email" />
    <Textfield type="password" />
    <Button>Sign in</Button>
    <p>
      Dont have an account?{' '}
      <Link href="sign-up">
        <a>Sign up</a>
      </Link>
    </p>
  </S.Wrapper>
)

export default FormSignIn
