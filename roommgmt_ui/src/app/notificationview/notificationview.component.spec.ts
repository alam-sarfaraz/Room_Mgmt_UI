import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotificationviewComponent } from './notificationview.component';

describe('NotificationviewComponent', () => {
  let component: NotificationviewComponent;
  let fixture: ComponentFixture<NotificationviewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NotificationviewComponent]
    });
    fixture = TestBed.createComponent(NotificationviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
