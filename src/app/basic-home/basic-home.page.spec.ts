import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicHomePage } from './basic-home.page';

describe('BasicHomePage', () => {
  let component: BasicHomePage;
  let fixture: ComponentFixture<BasicHomePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BasicHomePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BasicHomePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
