import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { BattleNetAccount } from '../../battlenet-account';

@Component({
  moduleId: module.id,
  selector: 'app-account-add',
  templateUrl: 'account-add.component.html',
  styleUrls: ['account-add.component.css']
})
export class AccountAddComponent implements OnInit {
  // TODO Add validity checking to the form
  @Output() onAccountAdded = new EventEmitter<BattleNetAccount>();
  account: BattleNetAccount = new BattleNetAccount();
  constructor() {}

  ngOnInit() {
  }

  onAccountSubmit(){
    this.onAccountAdded.emit(this.account);
  }

}
