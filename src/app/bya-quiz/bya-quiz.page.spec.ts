import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ByaQuizPage } from './bya-quiz.page';

describe('ByaQuizPage', () => {
  let component: ByaQuizPage;
  let fixture: ComponentFixture<ByaQuizPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ByaQuizPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ByaQuizPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
