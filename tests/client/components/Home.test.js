<<<<<<< Updated upstream
import React from 'react'
import Enzyme, {render} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import './setup-env'
=======
>>>>>>> Stashed changes
// import React from 'react'
// import Enzyme, {render} from 'enzyme'
// import Adapter from 'enzyme-adapter-react-16'
import '../../test/client/components/setup-env'

import Home from '../../../client/components/Home'

Home.prototype.componentDidMount = () => {}

<<<<<<< Updated upstream
Enzyme.configure({adapter: new Adapter()})
=======
>>>>>>> Stashed changes
// Enzyme.configure({adapter: new Adapter()})

test('test environment for home component is operating correctly', () => {
  expect(true).toBeTruthy()
})

<<<<<<< Updated upstream
test('<Home> has className of homepg', () => {
  const wrapper = render(<Home />)
  const hmpg = wrapper.find('.homepg')
  expect(hmpg.text()).toMatch(/.homepg/)
})
=======
>>>>>>> Stashed changes
// test('<Home> has className of homepg', () => {
//   const wrapper = render(<Home />)
//   const hmpg = wrapper.find('.homepg')
//   expect(hmpg.text()).toMatch(/.homepg/)
// })

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
