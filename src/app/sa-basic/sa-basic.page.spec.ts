import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SaBasicPage } from './sa-basic.page';

describe('SaBasicPage', () => {
  let component: SaBasicPage;
  let fixture: ComponentFixture<SaBasicPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SaBasicPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SaBasicPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
