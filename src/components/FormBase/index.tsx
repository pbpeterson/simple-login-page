import * as S from './styles'

type FormBaseProps = {
  children: React.ReactNode
}

const FormBase = ({ children }: FormBaseProps) => (
  <S.Wrapper>
    <S.LeftSide>
      <S.Title>Prensa</S.Title>
    </S.LeftSide>
    <S.RightSide>{children}</S.RightSide>
  </S.Wrapper>
)

export default FormBase
