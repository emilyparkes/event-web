import React from 'react'
import Enzyme, {shallow, render, mount} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import './setup-env'

import App from '../../../client/components/App'

App.prototype.componentDidMount = () => {}

Enzyme.configure({adapter: new Adapter()})

test('test environment for app component is operating correctly', () => {
  expect(true).toBeTruthy()
})