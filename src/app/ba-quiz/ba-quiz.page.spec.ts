import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BaQuizPage } from './ba-quiz.page';

describe('BaQuizPage', () => {
  let component: BaQuizPage;
  let fixture: ComponentFixture<BaQuizPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BaQuizPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BaQuizPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
