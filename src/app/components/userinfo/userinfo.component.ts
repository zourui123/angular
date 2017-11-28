import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'userinfo',
  templateUrl: './userinfo.component.html',
  styleUrls: ['./userinfo.component.scss']
})
export class UserinfoComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  
  ngAfterContentInit(hero){
      console.log(hero)
  }
}
