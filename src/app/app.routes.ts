import { RouterModule,CanActivate,CanDeactivate } from '@angular/router';
// 路由守卫
import { AuthGuard } from './auth/auth.guard'
 
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
 // 这块也要删除 因为是异步引入
 // import { ShadowComponent } from './components/shadow/shadow.component';


 //!! 路由传一个对象参数过来 不需要 shadow/:id 
export const appRouter = [
  //  {path: '',redirectTo: '/header',pathMatch:'full'},
    {
      path:'header',
      data:{preload:true},
      component:HeaderComponent
    },
    {
      path:'footer',
      data:{preload:true},
      canDeactivate:[AuthGuard],
      component:FooterComponent
    },
    {
      path:'shadow',
      data:{preload:false},
      canActivate:[AuthGuard],
      loadChildren:'./components/shadow/shadow.module#ShadowModule'
    },
    {
      path:'**',
      component:HeaderComponent
    }
]
