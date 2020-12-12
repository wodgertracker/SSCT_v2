import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';

import { AuthenticationService } from '@app/_services';
import web3 from '../../../web3';
import inventory from '../../../inventory';




// describe('InventoryComponent', () => {
//   let component: InventoryComponent;
//   let fixture: ComponentFixture<InventoryComponent>;

//   beforeEach(async(() => {
//     TestBed.configureTestingModule({
//       declarations: [ InventoryComponent ]
//     })
//     .compileComponents();
//   }));

//   beforeEach(() => {
//     console.log(web3.version);
//     fixture = TestBed.createComponent(InventoryComponent);
//     component = fixture.componentInstance;
//     fixture.detectChanges();
//   });

//   it('should create', () => {
//     expect(component).toBeTruthy();
//   });
// });
@Component({ templateUrl: 'inventory.component.html' })
export class InventoryComponent implements OnInit {
  
  InventoryForm: FormGroup;
  loading = false;
  submitted = false;
  returnUrl: string;
  error = '';

constructor(
  private formBuilder: FormBuilder,
  private route: ActivatedRoute,
  private router: Router,
  private authenticationService: AuthenticationService
) { 
  // redirect to home if already logged in
  if (this.authenticationService.currentUserValue) { 
      this.router.navigate(['/']);
  }
}

ngOnInit() {
  this.InventoryForm = this.formBuilder.group({
      pame: ['', Validators.required],
      ptype: ['', Validators.required],
      comment: ['', Validators.required],
      units: ['', Validators.required],
      price: ['', Validators.required],


  });

  // get return url from route parameters or default to '/'
  this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
}

// convenience getter for easy access to form fields
get f() { return this.InventoryForm.controls; }

onSubmit = async (event) =>{
event.preventDefault();

const accounts = await web3.eth.getAccounts();

// this.setState({message:'Waiting for transaction success'});
await inventory.methods.enter().send({
      from:accounts[0],
      // value:web3.utils.toWei(this.state.value, 'ether');

});

// this.setState ({message:Inventory has been added !!});


}

}