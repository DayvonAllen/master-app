import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RaBasicPage } from './ra-basic.page';

describe('RaBasicPage', () => {
  let component: RaBasicPage;
  let fixture: ComponentFixture<RaBasicPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RaBasicPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RaBasicPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
