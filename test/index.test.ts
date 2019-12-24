import webStorage from '../index'

const preId = 'grewer'

const storage = new webStorage({
  preId
})

describe('Normal setting',()=>{
  test('set value', () => {
    localStorage.clear();

    const ins = storage.set('gre', '123456');
    expect(ins.value).toEqual('123456');
    expect(ins.status).toEqual(0);
    expect(ins.key).toEqual(preId + 'gre');
  })
})


describe('Normal value, delete value', () => {
  beforeEach(() => {
    localStorage.clear();
    storage.set('gre', '123456');
  });

  test('get value', () => {
    storage.set('gre', '123456');
    const ins = storage.get('gre')
    expect(ins.value).toEqual('123456');
    expect(ins.status).toEqual(0);
  })

  test('remove value', () => {
    storage.remove('gre')
    const ins = storage.get('gre')
    expect(ins.value).toEqual(null);
  })
})
