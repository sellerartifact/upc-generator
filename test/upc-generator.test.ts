import UPC from '../src/upc-generator'

let upc = new UPC({ flagCode: '1', manufacturer: '23456' })

describe('test', () => {
  it('return upc code is not empty', () => {
    for (let i = 0; i < 100; i++) {
      let code = upc.create()
      expect(code.length).toBe(12)
      expect(code.charAt(0)).toBe('1')
    }

    let upc2 = new UPC()
    let code2 = upc2.create()
    expect(code2.length).toBe(12)
  })

  it(`return prop range error`, () => {
    expect(() => new UPC({ manufacturer: '23' })).toThrow(RangeError)
    expect(() => upc.create({ manufacturer: '23' })).toThrow(RangeError)
  })

  it('test isValid method', () => {
    expect(upc.isValid('1233')).toBeFalsy()
    expect(upc.isValid('012345678905')).toBeTruthy()
    expect(upc.isValid('639382000393')).toBeTruthy()
  })

  it('test createMultiple method', () => {
    let arr = upc.createMultiple({ size: 3 })
    expect(arr.length).toBe(3)
    for (let i = 0; i < arr.length; i++) {
      expect(arr[i].length).toBe(12)
      expect(arr[i].charAt(0)).toBe('1')
    }
  })

  it('test size prop', () => {
    let arr = upc.createMultiple({ size: -1 })
    expect(arr.length).toBe(1)
    for (let i = 0; i < arr.length; i++) {
      expect(arr[i].length).toBe(12)
      expect(arr[i].charAt(0)).toBe('1')
    }
  })
})
