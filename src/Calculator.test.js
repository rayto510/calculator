import React from 'react'
import { render, fireEvent } from '@testing-library/react'

import Calculator from './Calculator'

describe('<Calculator />', () => {
    it('renders an equals sign button', () => {
        const { getByRole } = render(<Calculator />)
        expect(getByRole('button', { name: /=/i })).toBeInTheDocument()
    })

    it('renders number buttons from 0 to 9', () => {
        const { getByRole } = render(<Calculator />)
        expect(getByRole('button', { name: /0/i })).toBeInTheDocument()
        expect(getByRole('button', { name: /1/i })).toBeInTheDocument()
        expect(getByRole('button', { name: /2/i })).toBeInTheDocument()
        expect(getByRole('button', { name: /3/i })).toBeInTheDocument()
        expect(getByRole('button', { name: /4/i })).toBeInTheDocument()
        expect(getByRole('button', { name: /5/i })).toBeInTheDocument()
        expect(getByRole('button', { name: /6/i })).toBeInTheDocument()
        expect(getByRole('button', { name: /7/i })).toBeInTheDocument()
        expect(getByRole('button', { name: /8/i })).toBeInTheDocument()
        expect(getByRole('button', { name: /9/i })).toBeInTheDocument()
    })

    it('renders +, -, *, and / buttons', () => {
        const { getByRole } = render(<Calculator />)
        expect(getByRole('button', { name: /\+/i })).toBeInTheDocument()
        expect(getByRole('button', { name: /\-/i })).toBeInTheDocument()
        expect(getByRole('button', { name: /x/i })).toBeInTheDocument()
        expect(getByRole('button', { name: /÷/i })).toBeInTheDocument()
    })

    it('renders a decimal button', () => {
        const { getByRole } = render(<Calculator />)
        expect(getByRole('button', { name: /\./i })).toBeInTheDocument()
    })
    
    it('renders an AC (All Clear) button', () => {
        const { getByRole } = render(<Calculator />)
        expect(getByRole('button', { name: /ac/i })).toBeInTheDocument()
    })

    it('renders a display text starting from 0', () => {
        const { getByTestId } = render(<Calculator />)
        expect(getByTestId('display').textContent).toBe("0")
    })

    it('displays number after adding', () => {
        const { getByRole, getByTestId } = render(<Calculator />)

        expect(getByTestId('display').textContent).toBe("0")

        fireEvent.click(getByRole('button', { name: /5/i }))
        expect(getByTestId('display').textContent).toBe("5")

        fireEvent.click(getByRole('button', { name: /\+/i }))

        fireEvent.click(getByRole('button', { name: /7/i }))
        expect(getByTestId('display').textContent).toBe("7")

        fireEvent.click(getByRole('button', { name: /\=/i }))
        expect(getByTestId('display').textContent).toBe("12")
    })

    it('displays number after subtracting', () => {
        const { getByRole, getByTestId } = render(<Calculator />)

        expect(getByTestId('display').textContent).toBe("0")

        fireEvent.click(getByRole('button', { name: /7/i }))
        expect(getByTestId('display').textContent).toBe("7")

        fireEvent.click(getByRole('button', { name: /\-/i }))

        fireEvent.click(getByRole('button', { name: /5/i }))
        expect(getByTestId('display').textContent).toBe("5")

        fireEvent.click(getByRole('button', { name: /\=/i }))
        expect(getByTestId('display').textContent).toBe("2")
    })

    it('displays number after multiplying', () => {
        const { getByRole, getByTestId } = render(<Calculator />)

        expect(getByTestId('display').textContent).toBe("0")

        fireEvent.click(getByRole('button', { name: /7/i }))
        expect(getByTestId('display').textContent).toBe("7")

        fireEvent.click(getByRole('button', { name: /x/i }))

        fireEvent.click(getByRole('button', { name: /5/i }))
        expect(getByTestId('display').textContent).toBe("5")

        fireEvent.click(getByRole('button', { name: /\=/i }))
        expect(getByTestId('display').textContent).toBe("35")
    })

    it('displays number after dividing', () => {
        const { getByRole, getByTestId } = render(<Calculator />)

        expect(getByTestId('display').textContent).toBe("0")

        fireEvent.click(getByRole('button', { name: /8/i }))
        expect(getByTestId('display').textContent).toBe("8")

        fireEvent.click(getByRole('button', { name: /÷/i }))

        fireEvent.click(getByRole('button', { name: /2/i }))
        expect(getByTestId('display').textContent).toBe("2")

        fireEvent.click(getByRole('button', { name: /\=/i }))
        expect(getByTestId('display').textContent).toBe("4")
    })

    it('should handle multiple digits', () => {
        const { getByRole, getByTestId } = render(<Calculator />)

        expect(getByTestId('display').textContent).toBe("0")

        fireEvent.click(getByRole('button', { name: /5/i }))
        expect(getByTestId('display').textContent).toBe("5")
        fireEvent.click(getByRole('button', { name: /0/i }))
        expect(getByTestId('display').textContent).toBe("50")

        fireEvent.click(getByRole('button', { name: /÷/i }))

        fireEvent.click(getByRole('button', { name: /2/i }))
        expect(getByTestId('display').textContent).toBe("2")

        fireEvent.click(getByRole('button', { name: /\=/i }))
        expect(getByTestId('display').textContent).toBe("25")
    })

    it('should reset after pressing the AC button', () => {
        const { getByRole, getByTestId } = render(<Calculator />)

        expect(getByTestId('display').textContent).toBe("0")

        fireEvent.click(getByRole('button', { name: /8/i }))
        expect(getByTestId('display').textContent).toBe("8")

        fireEvent.click(getByRole('button', { name: /÷/i }))

        fireEvent.click(getByRole('button', { name: /2/i }))
        expect(getByTestId('display').textContent).toBe("2")

        fireEvent.click(getByRole('button', { name: /ac/i }))
        expect(getByTestId('display').textContent).toBe("0")
    })

    it('should place a decimal after pressing its button', () => {
        const { getByRole, getByTestId } = render(<Calculator />)

        expect(getByTestId('display').textContent).toBe("0")

        fireEvent.click(getByRole('button', { name: /\./i }))

        fireEvent.click(getByRole('button', { name: /8/i }))
        expect(getByTestId('display').textContent).toBe("0.8")

        fireEvent.click(getByRole('button', { name: /5/i }))
        expect(getByTestId('display').textContent).toBe("0.85")

        fireEvent.click(getByRole('button', { name: /\./i }))
        expect(getByTestId('display').textContent).toBe("0.85")
    })
})
