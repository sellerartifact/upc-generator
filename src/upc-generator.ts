type FlagCode = '0' | '1' | '6' | '7' | '8' | '9' | ''


interface CreateProps {
  flagCode?: FlagCode
  manufacturer?: string
  size?: number
}


export default class UPC {
  private _flag:FlagCode = '0'
  private _manufacturer:string = ''

  static flagCodeArr:FlagCode[] = ['0','1','6','7','8','9']

  constructor(flag:FlagCode = '', manufacturer:string = ''){
    this._flag = flag
    this._manufacturer = manufacturer
  }


  public create(prop:CreateProps){
    let { flagCode, manufacturer } = prop
    if (manufacturer && manufacturer.length !== 5) {
      throw new RangeError('the length of manufacturer must be 5')
    }else{
      manufacturer = this._manufacturer
    }
    if(!flagCode){
      flagCode = this._flag
    }
    return this._create(prop)
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
    let sum: string | number = odd + even * 3
    sum = sum.toString()
    let lastestNum = (10 - Number(sum[sum.length - 1])) % 10
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
