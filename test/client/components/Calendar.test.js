import React from 'react'
import Enzyme, {shallow, render, mount} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import './setup-env'

import Calendar from '../../../client/components/Calendar'

Calendar.prototype.componentDidMount = () => {}

Enzyme.configure({adapter: new Adapter()})

test('test environment for calendar component is operating correctly', () => {
  expect(true).toBeTruthy()
})