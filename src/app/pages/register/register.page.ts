import { Component, OnInit } from '@angular/core';
import { Router } from  "@angular/router";
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  constructor(
    private router: Router,
  ) { }

  ngOnInit() {
  }

  goToHome(){
    this.router.navigate(['tabs/tab1']);
  }

  goToLogion() {
    this.router.navigateByUrl('/login');
  }

}
