import Enzyme from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import './setup-env'
import '../../test/client/components/setup-env'

import Popular from '../../../client/components/Popular'

Popular.prototype.componentDidMount = () => {}

Enzyme.configure({adapter: new Adapter()})
Enzyme.configure({ adapter: new Adapter() })

test('test environment for popular component is operating correctly', () => {
  expect(true).toBeTruthy()
})
