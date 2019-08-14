import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WaBasicPage } from './wa-basic.page';

describe('WaBasicPage', () => {
  let component: WaBasicPage;
  let fixture: ComponentFixture<WaBasicPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WaBasicPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WaBasicPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
