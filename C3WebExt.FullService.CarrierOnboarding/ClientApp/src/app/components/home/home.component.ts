import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { OrgUnitService } from 'src/app/services/orgUnit.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent {
  public orgUnits$: Observable<any>;

  constructor(private orgUnitService: OrgUnitService) {}

  ngOnInit(): void {
    this.orgUnits$ = this.orgUnitService.getAll();
  }
}
