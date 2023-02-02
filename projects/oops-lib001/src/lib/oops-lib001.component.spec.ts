import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OopsLib001Component } from './oops-lib001.component';

describe('OopsLib001Component', () => {
  let component: OopsLib001Component;
  let fixture: ComponentFixture<OopsLib001Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OopsLib001Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OopsLib001Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
