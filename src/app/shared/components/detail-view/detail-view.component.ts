import { Component, OnInit, Input } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'app-detail-view',
  template: `<section *ngIf="!active">
              <ng-content></ng-content>
            </section>`,
  styleUrls: ['detail-view.component.css']
})
export class DetailViewComponent implements OnInit {
  @Input() title:string;
  active = false;
  constructor() {
  }

  ngOnInit() {
  }

}
