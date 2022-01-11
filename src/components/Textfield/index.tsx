import React, { InputHTMLAttributes, useState } from 'react'
import * as S from './styles'

export type TextfieldProps = {
  type: 'email' | 'password' | 'text'
  placeholder?: string
  onInputChange?: (text: string) => void
} & InputHTMLAttributes<HTMLInputElement>

const Textfield = ({
  type,
  placeholder,
  onInputChange,
  ...rest
}: TextfieldProps) => {
  const [inputValue, setInputValue] = useState<string>('')

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.currentTarget.value)

    !!onInputChange && onInputChange(event.currentTarget.value)
  }

  return (
    <S.InputWrapper>
      <S.Input
        placeholder={
          type == 'email'
            ? 'johndoe@email.com'
            : type == 'password'
            ? '********'
            : placeholder
        }
        type={type}
        value={inputValue}
        onChange={handleChange}
        aria-label={
          type == 'email'
            ? 'Digite seu email'
            : type == 'password'
            ? 'Digite sua senha'
            : 'Digite seu texto'
        }
        {...rest}
      />
    </S.InputWrapper>
  )
}

export default Textfield
