import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaBasicPage } from './ma-basic.page';

describe('MaBasicPage', () => {
  let component: MaBasicPage;
  let fixture: ComponentFixture<MaBasicPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaBasicPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaBasicPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
