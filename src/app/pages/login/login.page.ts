import { Component, OnInit } from '@angular/core';
import { Router } from  "@angular/router";
import { HttpClient } from '@angular/common/http';
import { NgForm } from '@angular/forms';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  form: any = {}
  constructor(
    private router: Router,
    private http: HttpClient,
    public api: ApiService,
  ) { }

  ngOnInit() {
  }

  goToHome(){
    return this.http.post<any>(this.api.url+'/public-login', this.form).subscribe(data => {
      console.log(data);
      if( data.msg == 'success'){
        localStorage.setItem('JAS_PUBLIC_USER', JSON.stringify(data.userData));
        this.router.navigate(['tabs/tab1']);
      }else {
        alert(data.ms);
      }
    }, err =>{
      console.log(err);
    });
  }

  onSignup() {
    this.router.navigateByUrl('/register');
  }
}
