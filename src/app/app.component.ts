import { Component,ViewChild,ViewContainerRef,ComponentRef,ComponentFactoryResolver } from '@angular/core';
// 动态创建 需要引入
import { Router } from '@angular/router';

import { FooterComponent } from './components/footer/footer.component';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  // 动态创建 需要引入
  public hero;
  public title = 'app';
  initCount: number = 5;
  changeMsg: string;
  @ViewChild('container',{read:ViewContainerRef})
  container:ViewContainerRef;
  comp1: ComponentRef<FooterComponent>


  // 动态创建 需要引入
  constructor(
    private resolver:ComponentFactoryResolver,
    public router:Router){}
  
    ngInit(){
   
    }
 
  // 动态创建 需要引入 写在ngAfterContentInit 钩子中
  ngAfterContentInit() {
    const childComp = this.resolver.resolveComponentFactory(FooterComponent);
    // createComponent 第二个参数 设成0 就可以放到第一个位置上 等同于index 
    this.comp1 = this.container.createComponent(childComp)
    this.comp1.instance.title = "子组件动态赋值"
    //Called after ngOnInit when the component's or directive's content has been initialized.
    //Add 'implements AfterContentInit' to the class.
    this.hero = [
      { "name":"zou"},
      { "name":"daming"}
    ]
  }
  // 删除 动态创建的子组件
  public destoryChild():void{
    this.comp1.destroy();
  }
  public goNav(){
    // 需要引入 router
      this.router.navigate(['/shadow'],{queryParams:{userId:222,name:'zzz'}})
  }
  public selected(item){
     console.log(item)
  }
  public getChange(event: number){
    console.log(2222)
  this.changeMsg = '子组件change事件触发 值为:' + event
  }
}
