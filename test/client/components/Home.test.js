import React from 'react'
import Enzyme, {shallow} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import './setup-env'

import Home from '../../../client/components/Home'

Home.prototype.componentDidMount = () => {}

Enzyme.configure({adapter: new Adapter()})

test('test environment for home component is operating correctly', () => {
  expect(true).toBeTruthy()
})

test('<Home> root has className of homepg', () => {
  const wrapper = shallow(<Home />)
  const root = wrapper.find('.homepg')
  expect(root.length).toBe(1)
})

// test('page header includes fruit', () => {
//   const wrapper = render(<Home />)
//   const h1 = wrapper.find('h1')
//   expect(h1.text()).toMatch(/Fruit/)
// })

// test('renders an <li> for each fruit', () => {
//   const wrapper = mount(<Home />)
//   wrapper.setState({fruits: ['orange', 'persimmons', 'kiwi fruit']})
//   expect(wrapper.find('li').length).toBe(3)
// })
