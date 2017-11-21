import { Component,ViewChild,ViewContainerRef,ComponentRef,ComponentFactoryResolver } from '@angular/core';
// 动态创建 需要引入
import { FooterComponent } from './components/footer/footer.component';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  // 动态创建 需要引入
  @ViewChild('container',{read:ViewContainerRef})
  container:ViewContainerRef;
  comp1: ComponentRef<FooterComponent>


  // 动态创建 需要引入
  constructor(private resolver:ComponentFactoryResolver){}
  public title = 'app';

  // 动态创建 需要引入 写在ngAfterContentInit 钩子中
  ngAfterContentInit() {
    const childComp = this.resolver.resolveComponentFactory(FooterComponent);
    // createComponent 第二个参数 设成0 就可以放到第一个位置上 等同于index 
    this.comp1 = this.container.createComponent(childComp)
    this.comp1.instance.title = "子组件动态赋值"
    //Called after ngOnInit when the component's or directive's content has been initialized.
    //Add 'implements AfterContentInit' to the class.
    
  }
  // 删除 动态创建的子组件
  public destoryChild():void{
    this.comp1.destroy();
  }
}
