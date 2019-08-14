import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShaQuizPage } from './sha-quiz.page';

describe('ShaQuizPage', () => {
  let component: ShaQuizPage;
  let fixture: ComponentFixture<ShaQuizPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShaQuizPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShaQuizPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
