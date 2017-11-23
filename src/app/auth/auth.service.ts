import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {

  constructor() { }

  canActivate(){
    // 调用后端 返回状态
    return  true
  }

}
