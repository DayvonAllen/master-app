import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GaQuizPage } from './ga-quiz.page';

describe('GaQuizPage', () => {
  let component: GaQuizPage;
  let fixture: ComponentFixture<GaQuizPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GaQuizPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GaQuizPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
