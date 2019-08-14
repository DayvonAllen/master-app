import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PyaQuizPage } from './pya-quiz.page';

describe('PyaQuizPage', () => {
  let component: PyaQuizPage;
  let fixture: ComponentFixture<PyaQuizPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PyaQuizPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PyaQuizPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
