import Enzyme from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
<<<<<<< Updated upstream
import './setup-env'
=======
>>>>>>> Stashed changes
import '../../test/client/components/setup-env'

import Popular from '../../../client/components/Popular'

Popular.prototype.componentDidMount = () => {}

<<<<<<< Updated upstream
Enzyme.configure({adapter: new Adapter()})
=======
>>>>>>> Stashed changes
Enzyme.configure({ adapter: new Adapter() })

test('test environment for popular component is operating correctly', () => {
  expect(true).toBeTruthy()
})
