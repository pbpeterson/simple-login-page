import { Story, Meta } from '@storybook/react'
import Textfield, { TextfieldProps } from '.'

export default {
  title: 'Textfield',
  component: Textfield,
  args: {
    type: 'email',
  },
} as Meta

export const Default: Story<TextfieldProps> = (args) => (
  <div style={{ maxWidth: '20rem' }}>
    <Textfield {...args} />
  </div>
)
