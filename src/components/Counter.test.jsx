import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Counter from './Counter'

describe('Counter', () => {
  it('renders counter with initial value of 0', () => {
    render(<Counter />)
    expect(screen.getByTestId('counter-value')).toHaveTextContent('0')
  })

  it('increments counter when increment button is clicked', async () => {
    const user = userEvent.setup()
    render(<Counter />)
    
    const incrementBtn = screen.getByTestId('increment-btn')
    await user.click(incrementBtn)
    
    expect(screen.getByTestId('counter-value')).toHaveTextContent('1')
  })

  it('decrements counter when decrement button is clicked', async () => {
    const user = userEvent.setup()
    render(<Counter />)
    
    const decrementBtn = screen.getByTestId('decrement-btn')
    await user.click(decrementBtn)
    
    expect(screen.getByTestId('counter-value')).toHaveTextContent('-1')
  })

  it('resets counter when reset button is clicked', async () => {
    const user = userEvent.setup()
    render(<Counter />)
    
    const incrementBtn = screen.getByTestId('increment-btn')
    const resetBtn = screen.getByTestId('reset-btn')
    
    await user.click(incrementBtn)
    await user.click(incrementBtn)
    expect(screen.getByTestId('counter-value')).toHaveTextContent('2')
    
    await user.click(resetBtn)
    expect(screen.getByTestId('counter-value')).toHaveTextContent('0')
  })

  it('handles multiple increments correctly', async () => {
    const user = userEvent.setup()
    render(<Counter />)
    
    const incrementBtn = screen.getByTestId('increment-btn')
    
    await user.click(incrementBtn)
    await user.click(incrementBtn)
    await user.click(incrementBtn)
    
    expect(screen.getByTestId('counter-value')).toHaveTextContent('3')
  })
})

