import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LogLinkComponent } from './log-link.component';

describe('LogLinkComponent', () => {
  let component: LogLinkComponent;
  let fixture: ComponentFixture<LogLinkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LogLinkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LogLinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
