import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { FormService } from './form.service';


import 'rxjs/add/operator/map';
import 'rxjs/add/operator/filter';
import { Subject } from 'rxjs/Subject';

@Component({
  selector: 'forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.scss']
})
export class FormsComponent implements OnInit {
  public searchText:string;
  public searchTextStream:Subject<string> = new Subject<string>();

  constructor(public formService:FormService ) {
    let stream1 = new Observable( observer => {
        let timeout = setTimeout(()=>{
          observer.next('observable timeout')
        },2000)

         return () => {
           clearTimeout(timeout)
         }
    })
    // observable 只发射  不订阅的话不会有值
    let watcher = stream1.subscribe(value => console.log(value))
    setTimeout(() => {
      watcher.unsubscribe();
  }, 1000);
  let stream2 = new Observable<number>(observer => {
    let count = 0 ;
    let interval = setInterval(() => {
        observer.next(count++)
    },3000)

    return () => {
      clearInterval(interval);
   }
  
  })
  stream2.subscribe(value => console.log('observe' + value))
  stream2
        .filter(value => value%3==0)
        stream2.subscribe(value => console.log('filter' + value))
        stream2
        .map(value => value * value)
        .subscribe(value => console.log("map>"+value));
// promise 写法
  let promise = new Promise(resolve => {
    setTimeout(() => {
        resolve('---promise timeout---');
    }, 2000);
});
promise.then(value => console.log(value));

  }

  ngOnInit() {
      this.formService.getList()
      this.searchTextStream
      //防抖动 停止输入后 500
      .debounceTime(2000)
      // 按 无用键 不触发
       .distinctUntilChanged()
       .subscribe( searchText => {
          console.log(searchText)
       })
  }

  public searchChanged($event):void{
    console.log(this.searchText)
      this.searchTextStream.next(this.searchText)
  }
  

}
