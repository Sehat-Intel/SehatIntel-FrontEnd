import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableauDashboardComponent } from './tableau-dashboard.component';

describe('TableauDashboardComponent', () => {
  let component: TableauDashboardComponent;
  let fixture: ComponentFixture<TableauDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableauDashboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TableauDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
