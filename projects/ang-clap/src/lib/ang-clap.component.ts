import { Component, OnInit, Input, EventEmitter, Output, ɵbypassSanitizationTrustResourceUrl } from '@angular/core';

@Component({
  selector: 'ang-clap',
  templateUrl: './ang-clap.component.html',
  styleUrls: ['./ang-clap.component.scss']
})
export class AngClapComponent implements OnInit {
  isMouseHover = false;
  @Input() fillColor: string;
  @Input() claps : number = 0;
  @Input() maxClaps: number = 50;
  @Output() mouseClickEvent = new EventEmitter();
  isClaping: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  pressClap(){
     this.isClaping = true;
    if(this.claps != this.maxClaps){
      this.claps = this.claps + 1;
      console.log(this.claps)
       this.mouseClickEvent.emit();
    }
  }

}
