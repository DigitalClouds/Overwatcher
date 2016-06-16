import { Component, OnInit, ContentChildren, QueryList, AfterContentInit } from '@angular/core';

import { BattleNetAccount } from '../../battlenet-account';
import { LocalAccountsService } from '../../services/local-accounts.service'

import { AccountNameComponent } from '../account-name/account-name.component';
import { DetailViewComponent } from '../detail-view/detail-view.component';

@Component({
  moduleId: module.id,
  selector: 'app-account-list',
  templateUrl: 'account-list.component.html',
  styleUrls: ['account-list.component.css'],
  providers: [ LocalAccountsService ],
  directives: [ AccountNameComponent, DetailViewComponent ]
})
// TODO: Rename this, since it's not going to be the accounts list, it's going to be the master/detail view controller
export class AccountListComponent implements OnInit, AfterContentInit {

  accounts:Array<BattleNetAccount> = [new BattleNetAccount('GenAp', '2862'), new BattleNetAccount('Zaxgod', '1258'), new BattleNetAccount('DemonFTW', '2623')];
  @ContentChildren(DetailViewComponent) detailViews:QueryList<DetailViewComponent>;
  constructor(private localAccounts:LocalAccountsService) {
    this.updateAccountsList();
  }

  updateAccountsList(){
    this.accounts = this.localAccounts.accounts;
  }

  ngOnInit() {
  }

  ngAfterContentInit() {
    let activeTabs = this.detailViews.filter((view)=>view.active);

    if(activeTabs.length === 0 && this.detailViews.length > 0){
      this.selectView(this.detailViews.first);
    }
  }

  selectView(view:DetailViewComponent){
    this.detailViews.toArray().forEach(view => view.active = false);
    view.active = true;
  }


}
