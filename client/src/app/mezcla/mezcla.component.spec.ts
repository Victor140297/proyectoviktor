import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MezclaComponent } from './mezcla.component';

describe('MezclaComponent', () => {
  let component: MezclaComponent;
  let fixture: ComponentFixture<MezclaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MezclaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MezclaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
