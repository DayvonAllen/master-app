import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicReviewPage } from './basic-review.page';

describe('BasicReviewPage', () => {
  let component: BasicReviewPage;
  let fixture: ComponentFixture<BasicReviewPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BasicReviewPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BasicReviewPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
