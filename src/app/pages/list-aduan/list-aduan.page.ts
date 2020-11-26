import { Component, OnInit } from '@angular/core';
import { Router } from  "@angular/router";

@Component({
  selector: 'app-list-aduan',
  templateUrl: './list-aduan.page.html',
  styleUrls: ['./list-aduan.page.scss'],
})
export class ListAduanPage implements OnInit {

  constructor(
    private router: Router,
  ) { }

  ngOnInit() {
  }

  back(){
    this.router.navigate(['tabs/tab1']);
  }

}
