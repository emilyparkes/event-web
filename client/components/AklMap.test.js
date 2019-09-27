import Enzyme from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import '../../test/client/components/setup-env'

import AklMap from './AklMap'

AklMap.prototype.componentDidMount = () => {}

Enzyme.configure({adapter: new Adapter()})

test('test environment for aklmap component is operating correctly', () => {
  expect(true).toBeTruthy()
})
