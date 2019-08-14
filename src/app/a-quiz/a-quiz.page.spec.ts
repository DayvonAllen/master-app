import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AQuizPage } from './a-quiz.page';

describe('AQuizPage', () => {
  let component: AQuizPage;
  let fixture: ComponentFixture<AQuizPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AQuizPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AQuizPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
