import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import App from './App'

describe('App', () => {
  it('renders the app title', () => {
    render(<App />)
    expect(screen.getByText('CI Lab React App')).toBeInTheDocument()
  })

  it('displays default greeting for guest', () => {
    render(<App />)
    expect(screen.getByText('Hello, Guest!')).toBeInTheDocument()
  })

  it('updates greeting when name is entered', async () => {
    const user = userEvent.setup()
    render(<App />)
    
    const input = screen.getByTestId('name-input')
    await user.type(input, 'John')
    
    expect(screen.getByText('Hello, John!')).toBeInTheDocument()
  })
})

