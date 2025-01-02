import { render, screen } from '@testing-library/svelte'
import { expect, test } from 'vitest'

import App from '../src/App.svelte'

test('Initial greeting', () => {
    render(App, { props: { name: 'World' } })
    const greeting = screen.queryByText("Hello World!")
    expect(greeting).toBeInTheDocument()
})