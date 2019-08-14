import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HyaQuizPage } from './hya-quiz.page';

describe('HyaQuizPage', () => {
  let component: HyaQuizPage;
  let fixture: ComponentFixture<HyaQuizPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HyaQuizPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HyaQuizPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
