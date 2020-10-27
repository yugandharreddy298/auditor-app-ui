import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuditorpageComponent } from './auditorpage.component';

describe('AuditorpageComponent', () => {
  let component: AuditorpageComponent;
  let fixture: ComponentFixture<AuditorpageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuditorpageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuditorpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
