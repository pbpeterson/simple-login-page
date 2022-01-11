import '@testing-library/jest-dom'
import Textfield from '.'
import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

describe('Textfield', () => {
  it('should render Textfield', async () => {
    const onInputChange = jest.fn()

    render(<Textfield type="email" onInputChange={onInputChange} />)
    const input = screen.getByRole('textbox')
    const text = 'any_text'

    userEvent.type(input, text)

    await waitFor(() => {
      expect(input).toHaveValue(text)
      expect(onInputChange).toBeCalled()
    })
  })
  it('should render Textfield with correct placeholder and aria-label', async () => {
    const onInputChange = jest.fn()

    render(<Textfield type="email" onInputChange={onInputChange} />)

    expect(
      screen.getByPlaceholderText(/johndoe@email.com/i)
    ).toBeInTheDocument()
  })
})
