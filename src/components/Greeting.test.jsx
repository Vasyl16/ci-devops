import { render, screen } from '@testing-library/react'
import Greeting from './Greeting'

describe('Greeting', () => {
  it('displays greeting for guest when name is empty', () => {
    render(<Greeting name="" />)
    expect(screen.getByText('Hello, Guest!')).toBeInTheDocument()
  })

  it('displays greeting with name when name is provided', () => {
    render(<Greeting name="Alice" />)
    expect(screen.getByText('Hello, Alice!')).toBeInTheDocument()
  })

  it('displays greeting for guest when name is only whitespace', () => {
    render(<Greeting name="   " />)
    expect(screen.getByText('Hello, Guest!')).toBeInTheDocument()
  })
})

