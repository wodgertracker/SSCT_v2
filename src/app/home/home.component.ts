import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs/operators';
import { UserService, AuthenticationService } from '../_services';
import { Store } from '@ngrx/store';
import { AppState } from './../app.state';
import { Inventory } from '../_models/inventory'
import * as InventoryActions from '../../../src/actions/inventory.actions';
import { Observable } from 'rxjs';

@Component({ templateUrl: 'home.component.html' })
export class HomeComponent implements OnInit {
    currentUser: any;
    users = [];

    constructor(
        private authenticationService: AuthenticationService,
        private userService: UserService,
       private store: Store<AppState>
    ){}
    addTutorial(name,type,description,units,quantity) {
        this.store.dispatch(new InventoryActions.AddInventory({name: name, type:type,description:description,units:units,quantity:quantity }) )
      }

     /*
       name:string;
    type :string;
    description:string;
    units:DoubleRange;
    quantity:DoubleRange;

     */

    ngOnInit() {
        this.loadAllUsers();
    }

  

    private loadAllUsers() {
        this.userService.getAll()
            .pipe(first())
            .subscribe(users => this.users = users);
    }
}
