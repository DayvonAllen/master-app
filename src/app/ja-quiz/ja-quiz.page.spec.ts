import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JaQuizPage } from './ja-quiz.page';

describe('JaQuizPage', () => {
  let component: JaQuizPage;
  let fixture: ComponentFixture<JaQuizPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JaQuizPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JaQuizPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
