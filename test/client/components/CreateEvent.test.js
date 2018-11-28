import Enzyme from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import './setup-env'

import CreateEvent from '../../../client/components/CreateEvent'

CreateEvent.prototype.componentDidMount = () => {}

Enzyme.configure({adapter: new Adapter()})

test('test environment for CreateEvent component is operating correctly', () => {
  expect(true).toBeTruthy()
})
