
import { NgModule } from '@angular/core';
// 用动画的话需要引入
import { UserinfoComponent } from '../components/userinfo/userinfo.component';

@NgModule({
  declarations: [
    UserinfoComponent
  ],
 // 用动画的话需要引入 
  imports: [],
  exports:[UserinfoComponent],
  providers: [],
  bootstrap: [],
  // 动态创建 需要引入

})
export class SharedModule { }

