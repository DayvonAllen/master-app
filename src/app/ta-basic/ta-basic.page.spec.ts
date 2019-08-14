import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TaBasicPage } from './ta-basic.page';

describe('TaBasicPage', () => {
  let component: TaBasicPage;
  let fixture: ComponentFixture<TaBasicPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TaBasicPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaBasicPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
