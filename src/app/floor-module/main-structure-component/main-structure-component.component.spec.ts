import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainStructureComponent } from './main-structure-component.component';

describe('MainStructureComponent', () => {
  let component: MainStructureComponent;
  let fixture: ComponentFixture<MainStructureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MainStructureComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainStructureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
