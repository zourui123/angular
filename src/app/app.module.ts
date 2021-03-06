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
import { FormsModule } from '@angular/forms';

import { RouterModule,PreloadAllModules } from '@angular/router';

import { appRouter} from './app.routes'
// 共享组件
import { SharedModule } from './shared/shared.module';
// 路由守卫 引入
import { AuthGuard } from './auth/auth.guard'
import { AuthService } from './auth/auth.service'

// 定义的预加载 
import { FormsComponent } from './components/forms/forms.component'
import { MyPreloadingStrategy } from './common/preloading'


import { FormService } from './components/forms/form.service';

import { HttpModule,JsonpModule ,Http} from '@angular/http';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FormsComponent,
    HighlightDirective,
    FlyinComponent, 
    FooterComponent
  ],
 // 用动画的话需要引入 
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(appRouter,{preloadingStrategy:MyPreloadingStrategy}),
    SharedModule,
    HttpModule,
    FormsModule
  ],
  exports: [ RouterModule ],

  providers: [MessageService,MyPreloadingStrategy,AuthGuard,AuthService,FormService],
  bootstrap: [AppComponent],
  // 动态创建 需要引入
  entryComponents:[FooterComponent]
})
export class AppModule { }

