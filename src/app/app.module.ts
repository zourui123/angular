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

import { HighlightDirective } from './common/highlight.directive'

// 路由引入

import { RouterModule } from '@angular/router';

import { appRouter} from './app.routes'
// 共享组件
import { SharedModule } from './shared/shared.module';

// export const ROUTES: Routes = [
//     {path: '',redirectTo: '/header',pathMatch:'full'},
//     {path:'header',component:'HeaderComponent'},
//     {path:'shadow',component:'ShadowComponent'},
//     {path:'**',component:'HeaderComponent'}
// ]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HighlightDirective,
    FlyinComponent, 
    FooterComponent
  ],
 // 用动画的话需要引入 
  imports: [
    BrowserModule,BrowserAnimationsModule,RouterModule.forRoot(appRouter),SharedModule
  ],
  exports: [ RouterModule ],
  providers: [MessageService],
  bootstrap: [AppComponent],
  // 动态创建 需要引入
  entryComponents:[FooterComponent]
})
export class AppModule { }

