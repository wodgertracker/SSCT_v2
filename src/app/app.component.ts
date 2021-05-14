import { Component } from '@angular/core';
import { AuthenticationService } from './market-place/services/authentication.service';

@Component({
  selector: 'app-root',
  template: `
    <div>
      <app-nav></app-nav>
    </div>
  `,
  styles: []
})
export class AppComponent {
  currentUser: any;

  constructor( 

    private AuthenticationService: AuthenticationService
  ){
    this.AuthenticationService.currentUser.subscribe(x => this.currentUser = x);
  }

}
