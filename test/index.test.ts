import webStorage from '../index'

const storage = new webStorage({
  preId: 'grewer'
})

describe('test', () => {
  storage.set('gre', '123456');

  test('set value', () => {
    expect(storage.get('gre').value).toEqual('123456');
  })

  test('remove value', () => {
    storage.remove('gre')
    expect(storage.get('gre')).toEqual('');  // error  todo
  })
})
