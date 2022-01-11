import { Story, Meta } from '@storybook/react'
import FormSignUp from '.'

export default {
  title: 'FormSignUp',
  component: FormSignUp,
} as Meta

export const Default: Story = () => (
  <div style={{ maxWidth: '30rem' }}>
    <FormSignUp />
  </div>
)
