import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'ang-clap',
  templateUrl: './ang-clap.component.html',
  styleUrls: ['./ang-clap.component.scss']
})
export class AngClapComponent implements OnInit {
  isMouseHover = false;
  @Input() fillColor: string;
  @Input() claps: number = 0;
  @Input() maxClaps: number = 50;
  @Output() mouseClickEvent = new EventEmitter();
  isClapping: boolean = false;
  clapTimer: any;

  constructor() { }

  ngOnInit() {
  }

  mouseClick() {
    if (this.checkCapCondition()) {
      this.claps = this.claps + 1;
      this.isClapping = true;
      this.mouseClickEvent.emit();
    }
  }

  mouseUp() {
    this.isClapping = false;
    clearInterval(this.clapTimer);
  }

  mouseDown() {
    this.clapTimer = setInterval(() => {
      if (this.checkCapCondition) {
        this.claps = this.claps + 1;
        this.isClapping = true;
        this.mouseClickEvent.emit();
      }
    }, 300)
  }


  checkCapCondition() {
    if (this.claps != this.maxClaps) {
      return true;
    } else {
      return false;
    }
  }

}
