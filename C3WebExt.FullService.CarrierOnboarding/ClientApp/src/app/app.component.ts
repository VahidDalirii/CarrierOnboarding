import { Component } from '@angular/core';
import { AuthService } from '@centiro/ng-identity-server';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent{
  title = 'app';

  constructor(private authService: AuthService) {
    authService.setRefreshUrl('refresh');
  }

}
