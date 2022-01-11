import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import Button from '.'

describe('Button', () => {
  it('should render Button with its child', () => {
    render(<Button>buttonText</Button>)

    expect(
      screen.getByRole('button', { name: /buttontext/i })
    ).toBeInTheDocument()
  })
})
