import { Component, OnInit,ViewChild,ElementRef } from '@angular/core';
// 服务需要引

import { Subscription } from 'rxjs/Subscription';

import { MessageService } from '../../service/bus.service'



@Component({
  selector: 'footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  public jokeContent:string = '';
  public saved:boolean = true;
  message: any;
  subscription: Subscription;
  title:string;
  @ViewChild('greet')
  greetDiv: ElementRef
  constructor(public messageService: MessageService) {
    
  }

  ngOnInit() {
      this.messageService.eventBus.subscribe((value)=>{
        console.log(value)
      });
  }
  ngAfterViewInit(){
      console.log(this.greetDiv)
  }
  writeJoke(value){
    this.jokeContent = value;
    this.saved = false;
  }
  saveContent(){
    console.log(this.jokeContent)
    this.jokeContent = '';
    this.saved = true
  }
}
