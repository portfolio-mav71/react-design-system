import { Meta, StoryObj} from '@storybook/react'
import { within, userEvent, waitFor } from '@storybook/testing-library'
import { expect } from '@storybook/jest'
import { rest } from 'msw'
import { SignIn } from "./SignIn";
export default {
  title: 'Pages/SignIn',
  component: SignIn,
  args: {
    children: "Click aqui!!!",
  },
  argTypes: {},
  parameters: {
    msw: {
      handlers: [
        rest.post('/sessions', (req, res, ctx) => {
          return res(ctx.json({
            message: 'Login Sucess!'
          }))
        })
      ]
    }
  }
} as Meta

export const Default: StoryObj = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    userEvent.type(canvas.getByPlaceholderText('Digite seu e-mail'), 'teste@mav71.dev')
    userEvent.type(canvas.getByPlaceholderText('************'), '1234567')

    userEvent.click(canvas.getByRole('button'))

    waitFor(() => {
      return expect(canvas.getByText('User Logged!!!')).toBeInTheDocument()
    })
  }
}

