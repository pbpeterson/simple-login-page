import { ButtonHTMLAttributes } from 'react'
import * as S from './styles'

type ButtonProps = {
  children: React.ReactNode
} & ButtonHTMLAttributes<HTMLButtonElement>

const Button = ({ children }: ButtonProps) => <S.Wrapper>{children}</S.Wrapper>

export default Button
