import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RaQuizPage } from './ra-quiz.page';

describe('RaQuizPage', () => {
  let component: RaQuizPage;
  let fixture: ComponentFixture<RaQuizPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RaQuizPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RaQuizPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
