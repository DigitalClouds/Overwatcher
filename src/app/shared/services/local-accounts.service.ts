import { Injectable } from '@angular/core';

import { BattleNetAccount } from '../battlenet-account';

@Injectable()
export class LocalAccountsService {
  private _accounts: Array<BattleNetAccount>;
  constructor() {
    this.updateAccountsFromStorage();

    window.onstorage = (e)=>{
      // TODO: Do something like http://stackoverflow.com/questions/34376854/delegation-eventemitter-or-observable-in-angular2/35568924#35568924 if the accounts object changed
      this.updateAccountsFromStorage();
    }
  }

  private updateAccountsFromStorage(){
    const serializedAccounts = localStorage.getItem('accounts');

    if(serializedAccounts) {
      const storedAccounts = JSON.parse(serializedAccounts);
      this._accounts = storedAccounts.map((acc) => {
        return new BattleNetAccount(acc.name, acc.code);
      });
    }
    else{
      this._accounts = [];
    }
  }

  private writeAccountsToStorage(){
    let accounts = this._accounts.map((acc) => {
      return JSON.stringify(acc);
    });
    localStorage.setItem('accounts', JSON.stringify(accounts))
  }

  get accounts():Array<BattleNetAccount>{
    return this._accounts.slice();
  }
  addAccount(account:BattleNetAccount){
    this._accounts.push(account);
    this.writeAccountsToStorage();
  }
  deleteAccount(index:number){
    this._accounts.splice(index, 1);
    this.writeAccountsToStorage();
  }
}

