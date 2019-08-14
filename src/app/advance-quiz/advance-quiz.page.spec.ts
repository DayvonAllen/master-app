import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvanceQuizPage } from './advance-quiz.page';

describe('AdvanceQuizPage', () => {
  let component: AdvanceQuizPage;
  let fixture: ComponentFixture<AdvanceQuizPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdvanceQuizPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdvanceQuizPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
