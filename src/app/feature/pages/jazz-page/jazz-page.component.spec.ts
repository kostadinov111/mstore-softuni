import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JazzPageComponent } from './jazz-page.component';

describe('JazzPageComponent', () => {
  let component: JazzPageComponent;
  let fixture: ComponentFixture<JazzPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JazzPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JazzPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
