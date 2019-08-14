import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HaQuizPage } from './ha-quiz.page';

describe('HaQuizPage', () => {
  let component: HaQuizPage;
  let fixture: ComponentFixture<HaQuizPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HaQuizPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HaQuizPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
