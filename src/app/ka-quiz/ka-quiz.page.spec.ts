import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KaQuizPage } from './ka-quiz.page';

describe('KaQuizPage', () => {
  let component: KaQuizPage;
  let fixture: ComponentFixture<KaQuizPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KaQuizPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KaQuizPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
