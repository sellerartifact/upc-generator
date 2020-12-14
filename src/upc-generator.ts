type FlagCode = '0' | '1' | '6' | '7' | '8' | '9' | ''


interface CreateProps {
  flagCode?: FlagCode
  manufacturer?: string
  size?: number
}


export default class UPC {
  private _flagCode:FlagCode = '0'
  private _manufacturer:string = ''

  static flagCodeArr:FlagCode[] = ['0','1','6','7','8','9']

  constructor(prop:CreateProps={}){
    let { flagCode, manufacturer } = prop
    this._flagCode = flagCode || ''
    if (manufacturer && manufacturer.length !== 5) {
      throw new RangeError('the length of manufacturer must be 5')
    }
    this._manufacturer = manufacturer || ''
  }


  public create(prop:CreateProps = {}){
    let { flagCode, manufacturer } = prop
    if (manufacturer && manufacturer.length !== 5) {
      throw new RangeError('the length of manufacturer must be 5')
    }else{
      prop.manufacturer = this._manufacturer
    }
    if(!flagCode){
      prop.flagCode = this._flagCode
    }
    return this._create(prop)
  }
  public isValid(num: string): boolean {
    if (num.length !== 12) {
      return false
    }
    let computedLastNum = this.computedEanLastNum(num)
    let lastNum = num.toString().charAt(11)
    return lastNum === computedLastNum
  }

  private _create(prop:CreateProps):string{
    let { flagCode, manufacturer } = prop
    let code = ''
    if(!flagCode){
      let randomNum = Math.floor(Math.random() * UPC.flagCodeArr.length)
      flagCode =  UPC.flagCodeArr[randomNum]
    }
    if(!manufacturer){
      manufacturer = this.fillNumber(5)
    }
    code = flagCode + manufacturer + this.fillNumber(5)
    let lastestNum = this.computedEanLastNum(code)
    return code+lastestNum
  }

  private computedEanLastNum(num: string): string {
    let subNum = num.substr(0, 11)
    let odd = 0
    let even = 0
    let bOdd = true
    for (let i = 0; i < subNum.length; i++) {
      if (bOdd) {
        odd += Number(subNum[i])
      } else {
        even += Number(subNum[i])
      }
      bOdd = !bOdd
    }
    let sum: number = odd * 3 + even 
   
    let lastestNum = (10 - sum%10) % 10
    return lastestNum.toString()
  }

  private fillNumber(len: number): string {
    let str = ''
    for(let i=0;i<len;i++){
        str+=Math.floor(Math.random() * 10).toString()
    }
    return str
  }
}
