import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YaBasicPage } from './ya-basic.page';

describe('YaBasicPage', () => {
  let component: YaBasicPage;
  let fixture: ComponentFixture<YaBasicPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YaBasicPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YaBasicPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
