import webStorage from '../index'

const preId = 'grewer'

const storage = new webStorage({
  preId
})

describe('Normal setting', () => {
  test('set value', () => {
    localStorage.clear();

    const ins = storage.set('gre', '123456');
    expect(ins.value).toBe('123456');
    expect(ins.status).toBe(0);
    expect(ins.key).toBe(preId + 'gre');
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
    expect(ins.value).toBe('123456');
    expect(ins.status).toBe(0);
  })

  test('remove value', () => {
    storage.remove('gre')
    const ins = storage.get('gre')
    expect(ins.value).toBe(null);
  })
})

describe('Special case', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  test('get value', () => {
    const ins = storage.get('gre')
    expect(ins.value).toBe(null);
    expect(ins.status).toBe(1);
  })

  test('remove value', () => {
    const ins = storage.remove('gre')
    expect(ins.status).toBe(1);
    expect(ins.value).toBe(null);
  })
})

describe('Timeout', () => {
  test('get value', async () => {
    storage.set('gre', '123456');

    const item = localStorage.getItem(preId + 'gre')

    const value = item!.split('|-|')

    const time = value[0]

    const timeoutTime = Number(time) - 1000 * 60 * 60 * 24

    const _value = timeoutTime.toString() + '|-|' + value[1]

    localStorage.setItem(preId + 'gre',_value)

    const ins = storage.get('gre')

    expect(ins.status).toBe(4)

    expect(ins.value).toBe(null)
  })
})
