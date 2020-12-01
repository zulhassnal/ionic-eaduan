import { Component, OnInit } from '@angular/core';
import { Router } from  "@angular/router";
import { NgForm } from '@angular/forms';
import { ApiService } from '../../services/api.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  form: any = {};
  constructor(
    private router: Router,
    public api: ApiService,
    private http: HttpClient,
  ) { }

  ngOnInit() {
  }

  goRegister(){
    console.log(this.form);
    //console.log(this.api.register(this.form));
    this.http.post<any>(this.api.url+'/public-register', this.form).subscribe(data => {
      console.log(data);
    });
    //this.router.navigate(['tabs/tab1']);
  }

  goToLogion() {
    this.router.navigateByUrl('/login');
  }

}
