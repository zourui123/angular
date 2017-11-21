import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';
import { MessageService } from '../../service/bus.service'

@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  currentTime = new Date()
  classses = {}
  mapStatus : string
  texts = {name:'zzz'}
  constructor(public messageService: MessageService) { 

    setInterval(()=>{
      this.currentTime = new Date()
          },1000)
  }

  ngOnInit() {
    this.mapStatus ='1'

  }
  sayhello(){
    alert('父组件掉子组件方法')
  }
  setclass(){
    console.log(11)
    this.classses= 'colors'
  }
  services(){
    this.messageService.eventBus.next('第一个组件出发的时间')
  }
}
