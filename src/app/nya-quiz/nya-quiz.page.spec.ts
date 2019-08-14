import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NyaQuizPage } from './nya-quiz.page';

describe('NyaQuizPage', () => {
  let component: NyaQuizPage;
  let fixture: ComponentFixture<NyaQuizPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NyaQuizPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NyaQuizPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
