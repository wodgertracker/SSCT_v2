import { Component, OnInit } from '@angular/core';
import { AuthService } from '../market-place/services/authentication.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  constructor(
    public authService: AuthService
  ) { }

  ngOnInit() { }

}