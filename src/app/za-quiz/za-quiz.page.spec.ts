import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ZaQuizPage } from './za-quiz.page';

describe('ZaQuizPage', () => {
  let component: ZaQuizPage;
  let fixture: ComponentFixture<ZaQuizPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ZaQuizPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ZaQuizPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
