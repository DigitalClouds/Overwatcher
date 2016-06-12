/**
 * Created by david on 10/06/2016.
 */

export class BattleNetAccount{
  constructor(public name:string = '', public code:string = ''){}
  toString(separator):string{
    return `${this.name}${separator}${this.code}`
  }
  get apiString():string{
    return this.toString('-');
  }
  get displayString():string{
    return this.toString('#');
  }

}
