import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaQuizPage } from './ma-quiz.page';

describe('MaQuizPage', () => {
  let component: MaQuizPage;
  let fixture: ComponentFixture<MaQuizPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaQuizPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaQuizPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
