import { Address } from "./address";

export class User {
  constructor(
    public name : string,
    public email : string,
    public address : Address,
    public phone : number,
    public topic : string,
    public timePreference : string,
    public subscribe : boolean
  ){

  }
}
