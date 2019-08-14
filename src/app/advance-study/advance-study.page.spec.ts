import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvanceStudyPage } from './advance-study.page';

describe('AdvanceStudyPage', () => {
  let component: AdvanceStudyPage;
  let fixture: ComponentFixture<AdvanceStudyPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdvanceStudyPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdvanceStudyPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
