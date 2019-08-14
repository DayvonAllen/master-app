import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChaQuizPage } from './cha-quiz.page';

describe('ChaQuizPage', () => {
  let component: ChaQuizPage;
  let fixture: ComponentFixture<ChaQuizPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChaQuizPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChaQuizPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
