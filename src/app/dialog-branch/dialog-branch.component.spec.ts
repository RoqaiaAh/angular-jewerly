import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogBranchComponent } from './dialog-branch.component';

describe('DialogBranchComponent', () => {
  let component: DialogBranchComponent;
  let fixture: ComponentFixture<DialogBranchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogBranchComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogBranchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
