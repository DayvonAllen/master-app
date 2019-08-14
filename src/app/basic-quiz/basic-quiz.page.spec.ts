import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicQuizPage } from './basic-quiz.page';

describe('BasicQuizPage', () => {
  let component: BasicQuizPage;
  let fixture: ComponentFixture<BasicQuizPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BasicQuizPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BasicQuizPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
