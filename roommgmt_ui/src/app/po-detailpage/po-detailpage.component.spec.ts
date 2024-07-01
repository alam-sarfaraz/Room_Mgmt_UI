import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PoDetailpageComponent } from './po-detailpage.component';

describe('PoDetailpageComponent', () => {
  let component: PoDetailpageComponent;
  let fixture: ComponentFixture<PoDetailpageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PoDetailpageComponent]
    });
    fixture = TestBed.createComponent(PoDetailpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
