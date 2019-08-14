import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HaBasicPage } from './ha-basic.page';

describe('HaBasicPage', () => {
  let component: HaBasicPage;
  let fixture: ComponentFixture<HaBasicPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HaBasicPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HaBasicPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
