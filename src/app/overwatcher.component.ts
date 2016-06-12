import { Component } from '@angular/core';

import { AccountListComponent } from './shared/components/account-list/account-list.component';
import { AccountNameComponent } from './shared/components/account-name/account-name.component';
import { AccountAddComponent } from './shared/components/account-add/account-add.component';
import { DetailViewComponent } from './shared/components/detail-view/detail-view.component';

@Component({
  moduleId: module.id,
  selector: 'overwatcher-app',
  templateUrl: 'overwatcher.component.html',
  styleUrls: ['overwatcher.component.css'],
  directives: [ AccountListComponent, AccountNameComponent, DetailViewComponent, AccountAddComponent ]
})
export class OverwatcherAppComponent {
  title = 'overwatcher works!';
}
