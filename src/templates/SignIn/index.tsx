import FormSignIn from '../../components/FormSignIn'
import * as S from './styles'

const SignIn = () => (
  <S.Wrapper>
    <S.LeftSide>
      <S.Title>Prensa</S.Title>
    </S.LeftSide>
    <S.RightSide>
      <FormSignIn />
    </S.RightSide>
  </S.Wrapper>
)

export default SignIn
