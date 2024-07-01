import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PoDetailNavbarComponent } from './po-detail-navbar.component';

describe('PoDetailNavbarComponent', () => {
  let component: PoDetailNavbarComponent;
  let fixture: ComponentFixture<PoDetailNavbarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PoDetailNavbarComponent]
    });
    fixture = TestBed.createComponent(PoDetailNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
