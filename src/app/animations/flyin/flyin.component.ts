import { Component, OnInit } from '@angular/core';
// 用动画的话需要引入
import { flyIn } from '../flyin';
@Component({
  selector: 'flyin',
  templateUrl: './flyin.component.html',
  styleUrls: ['./flyin.component.scss'],
  // 用动画的话需要引入
  animations: [flyIn]  
})
export class FlyinComponent implements OnInit {
state:string = 'active'
  constructor() { }

  ngOnInit() {
  }
  toggleState() {
    this.state = this.state === 'active' ? 'inactive' : 'active';
  }
}
