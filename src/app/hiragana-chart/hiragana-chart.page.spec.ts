import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HiraganaChartPage } from './hiragana-chart.page';

describe('HiraganaChartPage', () => {
  let component: HiraganaChartPage;
  let fixture: ComponentFixture<HiraganaChartPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HiraganaChartPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HiraganaChartPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
