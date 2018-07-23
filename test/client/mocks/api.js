/* eslint-env jest */

jest.mock('../../../client/lib/apiClient', () => {
  const testToken = {id: 'test token id'}
  return () => Promise.resolve({body: {token: testToken}})
})
