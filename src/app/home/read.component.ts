import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppState } from './../app.state';
import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs/operators';
import { UserService, AuthenticationService } from '../_services';
import { Inventory } from '@app/_models/inventory';


export class ReadComponent implements OnInit {

    // Section 1
    inventory: Observable<Inventory[]>;
  
    // Section 2
    constructor(private store: Store<AppState>) { 
      this.inventory = store.select('inventory');
    }
  
    ngOnInit() {}
  
  }