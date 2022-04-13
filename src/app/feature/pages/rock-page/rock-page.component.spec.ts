import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RockPageComponent } from './rock-page.component';

describe('RockPageComponent', () => {
  let component: RockPageComponent;
  let fixture: ComponentFixture<RockPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RockPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RockPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
