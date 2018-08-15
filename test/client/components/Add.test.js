import React from 'react'
import Enzyme, {shallow, render, mount} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import './setup-env'

import Add from '../../../client/components/Add'

Add.prototype.componentDidMount = () => {}

Enzyme.configure({adapter: new Adapter()})

test('test environment for add component is operating correctly', () => {
  expect(true).toBeTruthy()
})