import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NaBasicPage } from './na-basic.page';

describe('NaBasicPage', () => {
  let component: NaBasicPage;
  let fixture: ComponentFixture<NaBasicPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NaBasicPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NaBasicPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
