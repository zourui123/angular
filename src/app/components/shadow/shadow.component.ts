import { Component, OnInit,ViewEncapsulation } from '@angular/core';

import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'shadow',
  // 如果chrome  采用 shadow dom  好处  封装型更好 都封装在shadow dom 不会影响别人
  encapsulation:ViewEncapsulation.Native,
  templateUrl: './shadow.component.html',
  styleUrls: ['./shadow.component.scss']
})
export class ShadowComponent implements OnInit {
  
  constructor(public activeRoute: ActivatedRoute) { }

  ngOnInit(){
    this.activeRoute.params.subscribe((params)=>{
      console.log(params)
    })
    this.activeRoute.queryParams.subscribe((params)=>{
      console.log(params)
    })
  }
 
}
