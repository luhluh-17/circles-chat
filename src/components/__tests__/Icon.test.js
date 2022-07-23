/* eslint-disable testing-library/no-unnecessary-act */
import React from 'react'
import { render, unmountComponentAtNode } from 'react-dom'
import { act } from 'react-dom/test-utils'
import Icon from '../Icon'

let container = null
beforeEach(() => {
  container = document.createElement('div')
  document.body.appendChild(container)
})

afterEach(() => {
  unmountComponentAtNode(container)
  container.remove()
  container = null
})

it('renders with or without a name', () => {
  act(() => {
    render(<Icon />, container)
  })
  expect(container.textContent).toBe('')

  act(() => {
    render(<Icon icon='email' />, container)
  })
  expect(container.textContent).toBe('email')
})
