import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'ang-clap',
  templateUrl: './ang-clap.component.html',
  styleUrls: ['./ang-clap.component.scss']
})

export class AngClapComponent implements OnInit {
  @Input() fillColor: string;
  @Input() claps: number = 0;
  @Input() showBorder: boolean = true;
  @Input() showAnimation: boolean = true;
  @Input() maxClaps: number = 50;
  @Output() mouseClickEvent = new EventEmitter();
  isClapping: boolean = false;
  isMouseHover: boolean = false;
  showClear: boolean = false;
  clapTimer: any;
  clearMouseLeaveTimer: any;
  isClearBtnHover: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  /* funcntion on mouse release */
  mouseUp() {
    this.isClapping = false;
    clearInterval(this.clapTimer);
  }

  /* funcntion on mouse click and hold */
  mouseDown() {
    this.isClapping = true;
    this.showClear = false;
    if(this.checkClapCondition()){
    this.claps = this.claps + 1;
    }
    this.clapTimer = setInterval(() => {
      if (this.checkClapCondition()) {
        this.claps = this.claps + 1;
        this.isClapping = !this.isClapping;
        this.mouseClickEvent.emit();
      } else {
        return 0;
      }
    }, 200)
  }

  /* funcntion on mouse leave */
  mouseLeave() {
    this.isMouseHover = false;
    this.isClapping = false;
    this.clearMouseLeaveTimer = setTimeout(() => {
      if(!this.isClearBtnHover){
      this.showClear = false;
      }
    }, 300);

  }

  /* funcntion on mouse enter */
  mouseEnter() {
    this.isMouseHover = true;
    clearInterval(this.clearMouseLeaveTimer);
    if(this.claps > 0 && !this.isClapping){
    this.showClear = true;
    }
  }

  /* clear claps */
  clearClaps(){
    this.claps = 0;
    this.showClear = false;
  }

  /* function on mouse enter on clear claps */
  mouseOnClearClaps(){
    this.showClear = true;
    this.isClearBtnHover = true;
  }


  /* function on mouse leave on clear claps */
  mouseLeaveClearClaps(){
    this.showClear = false;
    this.isClearBtnHover = false;
  }

  /* check if claps is equals to maximum claps */
  checkClapCondition() {
    if (this.claps != this.maxClaps) {
      return true;
    } else {
      return false;
    }
  }

  /* check claps is greater than zero and is mouse over the icon */
  checkShowClapIcon() {
    if (this.claps > 0 && this.isMouseHover) {
      return true;
    } else {
      return false;
    }
  }

}
