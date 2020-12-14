import UPC from "../src/upc-generator"

let upc = new UPC({flagCode: '1',manufacturer:'23456'})
/**
 * Dummy test
 */
describe("test", () => {
    it('return upc code is not empty', () => {
        for(let i=0;i<100;i++){
            let code  = upc.create()
            expect(code.length).toBe(12)
            expect(code.charAt(0)).toBe('1')
        }
    })

    it(`return prop range error`, ()=>{
        expect(() => new UPC({manufacturer: '23'}) ).toThrow(RangeError)
        expect(() => upc.create({manufacturer: '23'}) ).toThrow(RangeError)
    })
   

    it('test isValid method', ()=>{
        expect(upc.isValid('1233')).toBeFalsy()
        expect(upc.isValid('012345678905')).toBeTruthy()
        expect(upc.isValid('639382000393')).toBeTruthy()
    })
})
