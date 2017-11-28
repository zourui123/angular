import { Component, OnInit,ViewChild,ElementRef,Output, EventEmitter  } from '@angular/core';
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
  count: number = 22222222222;
  @Output() change:EventEmitter<number> = new EventEmitter<number>();

  clicked(){
    console.log(1111)
    this.change.emit(this.count)
  }
}
