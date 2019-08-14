import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RyaQuizPage } from './rya-quiz.page';

describe('RyaQuizPage', () => {
  let component: RyaQuizPage;
  let fixture: ComponentFixture<RyaQuizPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RyaQuizPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RyaQuizPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
