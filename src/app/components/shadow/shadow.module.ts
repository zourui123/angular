
import { NgModule, OnInit } from '@angular/core';
// 用动画的话需要引入
import { ShadowComponent } from './shadow.component';
// 动态创建 需要引入组件



// 路由引入
import { RouterModule } from '@angular/router';
import { shadowRouter } from './shadow.routes'




// 共享模块
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  declarations: [
    ShadowComponent
  ],
 // 用动画的话需要引入 
  imports: [
    RouterModule.forChild(shadowRouter),SharedModule
  ],
  providers: [],
  bootstrap: [],
  // 动态创建 需要引入

})
export class ShadowModule {
 
 }

