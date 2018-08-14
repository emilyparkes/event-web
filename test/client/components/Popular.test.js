import React from 'react'
import Enzyme, {shallow, render, mount} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import './setup-env'

import Home from '../../../client/components/Home'

Home.prototype.componentDidMount = () => {}

Enzyme.configure({adapter: new Adapter()})

test('test environment for popular component is operating correctly', () => {
  expect(true).toBeTruthy()
})