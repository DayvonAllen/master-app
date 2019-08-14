import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaQuizPage } from './pa-quiz.page';

describe('PaQuizPage', () => {
  let component: PaQuizPage;
  let fixture: ComponentFixture<PaQuizPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaQuizPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaQuizPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
