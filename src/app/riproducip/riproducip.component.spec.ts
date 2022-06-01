import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RiproducipComponent } from './riproducip.component';

describe('RiproducipComponent', () => {
  let component: RiproducipComponent;
  let fixture: ComponentFixture<RiproducipComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RiproducipComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RiproducipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
