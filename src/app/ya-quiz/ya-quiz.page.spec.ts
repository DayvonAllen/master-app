import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YaQuizPage } from './ya-quiz.page';

describe('YaQuizPage', () => {
  let component: YaQuizPage;
  let fixture: ComponentFixture<YaQuizPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YaQuizPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YaQuizPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
