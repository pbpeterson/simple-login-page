import FormBase from '.'
import { render, screen } from '@testing-library/react'

describe('FormBase', () => {
  it('should render FormBase with child', () => {
    render(
      <FormBase>
        <p>anytext</p>
      </FormBase>
    )

    expect(screen.getByText(/anytext/i)).toBeInTheDocument()
  })
})
