import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyaQuizPage } from './mya-quiz.page';

describe('MyaQuizPage', () => {
  let component: MyaQuizPage;
  let fixture: ComponentFixture<MyaQuizPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyaQuizPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyaQuizPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
