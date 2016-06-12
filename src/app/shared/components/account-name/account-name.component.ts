import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { BattleNetAccount } from '../../battlenet-account';

@Component({
  moduleId: module.id,
  selector: 'app-account-name',
  templateUrl: 'account-name.component.html',
  styleUrls: ['account-name.component.css']
})
export class AccountNameComponent implements OnInit {
  @Input() account:BattleNetAccount;
  @Output() onSelected = new EventEmitter<boolean>();
  selected:boolean = false;
  constructor() {}

  ngOnInit() {  }

  onSelect(e){
   this.selected = true;
    this.onSelected.emit(true);
  }

}
