import { RouterModule } from '@angular/router';

 
import { HeaderComponent } from './components/header/header.component';
 // 这块也要删除 因为是异步引入
 // import { ShadowComponent } from './components/shadow/shadow.component';


 //!! 路由传一个对象参数过来 不需要 shadow/:id 
export const appRouter = [
  //  {path: '',redirectTo: '/header',pathMatch:'full'},
    {path:'header',component:HeaderComponent},
    {path:'shadow',loadChildren:'./components/shadow/shadow.module#ShadowModule'},
    {path:'**',component:HeaderComponent}
]
