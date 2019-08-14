import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DaQuizPage } from './da-quiz.page';

describe('DaQuizPage', () => {
  let component: DaQuizPage;
  let fixture: ComponentFixture<DaQuizPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DaQuizPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DaQuizPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
