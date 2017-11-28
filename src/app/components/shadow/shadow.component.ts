import { Component, OnInit,ViewEncapsulation} from '@angular/core';

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
    //  获取 一个参数时  路由配置  shadow/:id 
    this.activeRoute.params.subscribe((params)=>{
      console.log(params)
    })
    // 获取多个参数是 不需要 配置路由
    this.activeRoute.queryParams.subscribe((params)=>{
      console.log(params)
    })
  }

}
