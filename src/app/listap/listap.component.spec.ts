import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListapComponent } from './listap.component';

describe('ListapComponent', () => {
  let component: ListapComponent;
  let fixture: ComponentFixture<ListapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListapComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
