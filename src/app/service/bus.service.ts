import { Injectable } from '@angular/core';
// 需要引入 subject
import { Subject } from 'rxjs/Subject'



@Injectable()
export class MessageService {
  // subject 后面要定义类型
  public eventBus:Subject<string> = new Subject<any>();

}
