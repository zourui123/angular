import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// 用动画的话需要引入
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
// 动态创建 需要引入组件
import { FooterComponent } from './components/footer/footer.component';
import { MessageService } from './service/bus.service';
import { FlyinComponent } from './animations/flyin/flyin.component';
import { ShadowComponent } from './components/shadow/shadow.component';
import { HighlightDirective } from './common/highlight.directive'

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ShadowComponent,
   HighlightDirective, 
    FlyinComponent, 
    FooterComponent
  ],
 // 用动画的话需要引入 
  imports: [
    BrowserModule,BrowserAnimationsModule
  ],
  providers: [MessageService],
  bootstrap: [AppComponent],
  // 动态创建 需要引入
  entryComponents:[FooterComponent]
})
export class AppModule { }

