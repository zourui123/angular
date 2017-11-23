import { Injectable } from '@angular/core';
import { CanActivate,CanDeactivate } from '@angular/router'
//import { CanDeactivate } from '@angular/router'
import { AuthService } from './auth.service'
import { FooterComponent } from '../components/footer/footer.component';
// 装饰器
@Injectable()
export class AuthGuard implements CanActivate, CanDeactivate<any>{
    // 这块要小写 canActivate
    constructor(private authService:AuthService){

    }
    canActivate() {
        // 写一个service到后端去验证
        console.log(this.authService.canActivate())
        return  this.authService.canActivate();
    }
    canDeactivate(component:FooterComponent){
        console.log(component)
        if(!component.saved){
            return window.confirm('确定不保存啊')
        }
        return  true
    }
}