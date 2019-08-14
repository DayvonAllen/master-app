import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TaQuizPage } from './ta-quiz.page';

describe('TaQuizPage', () => {
  let component: TaQuizPage;
  let fixture: ComponentFixture<TaQuizPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TaQuizPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaQuizPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
