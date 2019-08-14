import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvanceHomePage } from './advance-home.page';

describe('AdvanceHomePage', () => {
  let component: AdvanceHomePage;
  let fixture: ComponentFixture<AdvanceHomePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdvanceHomePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdvanceHomePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
