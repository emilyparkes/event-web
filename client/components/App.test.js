import React from 'react'
import {shallow} from 'enzyme'

import App from './App'

test('test environment for app component is operating correctly', () => {
  expect(true).toBeTruthy()
})

test('<App /> contains a header, switch and footer', () => {
  const wrapper = shallow(<App />)
  expect(wrapper.text()).toBe('<Header /><Switch /><Footer />')
})

test('<App> root has className of app', () => {
  const wrapper = shallow(<App />)
  const root = wrapper.find('.app')
  expect(root.length).toBe(1)
})
