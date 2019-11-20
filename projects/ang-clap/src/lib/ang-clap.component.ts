import { Component, OnInit, Input, EventEmitter, Output, Directive, HostListener } from '@angular/core';

@Component({
  selector: 'ang-clap',
  templateUrl: './ang-clap.component.html',
  styleUrls: ['./ang-clap.component.scss']
})

@Directive({
  selector: '[mouse-events]'
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
  clapTimer: any;

  constructor() { }

  ngOnInit() {
  }

  /* funcntion on clap icon */
  @HostListener('click')
  mouseClick() {
    if (this.checkClapCondition()) {
      this.claps = this.claps + 1;
      this.isClapping = true;
      this.mouseClickEvent.emit();
    } else {
      return 0;
    }
  }

  /* funcntion on mouse release */
  @HostListener('mouseup')
  mouseUp() {
    this.isClapping = false;
    clearInterval(this.clapTimer);
  }

  /* funcntion on mouse click and hold */
  @HostListener('mousedown')
  mouseDown() {
    this.clapTimer = setInterval(() => {
      if (this.checkClapCondition()) {
        this.claps = this.claps + 1;
        this.isClapping = true;
        this.mouseClickEvent.emit();
      } else {
        return 0;
      }
    }, 300)
  }

  /* funcntion on mouse leave */
  @HostListener('mouseleave')
  mouseLeave() {
    this.isMouseHover = false;
  }

  /* funcntion on mouse enter */
  @HostListener('mouseenter')
  mouseEnter() {
    this.isMouseHover = true;
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
