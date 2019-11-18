import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AngClapComponent } from './ang-clap.component';

describe('AngClapComponent', () => {
  let component: AngClapComponent;
  let fixture: ComponentFixture<AngClapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AngClapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AngClapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
