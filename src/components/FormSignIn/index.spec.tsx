import FormSignIn from '.'
import { render, screen } from '@testing-library/react'

describe('FormSignIn', () => {
  it('should render FormSignIn', () => {
    render(<FormSignIn />)

    expect(screen.getByLabelText(/digite seu email/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/digite sua senha/i)).toBeInTheDocument()

    expect(screen.getByRole('link')).toHaveAttribute('href', '/sign-up')
  })
})
