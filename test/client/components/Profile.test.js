import React from 'react'
import Enzyme, {shallow, render, mount} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import './setup-env'

import Profile from '../../../client/components/Profile'

Profile.prototype.componentDidMount = () => {}

Enzyme.configure({adapter: new Adapter()})

test('test environment for profile component is operating correctly', () => {
  expect(true).toBeTruthy()
})