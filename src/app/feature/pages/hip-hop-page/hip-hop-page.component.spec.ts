import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HipHopPageComponent } from './hip-hop-page.component';

describe('HipHopPageComponent', () => {
  let component: HipHopPageComponent;
  let fixture: ComponentFixture<HipHopPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HipHopPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HipHopPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
