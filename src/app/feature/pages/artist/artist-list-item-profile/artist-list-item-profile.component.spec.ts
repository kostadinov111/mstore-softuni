import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtistListItemProfileComponent } from './artist-list-item-profile.component';

describe('ArtistListItemProfileComponent', () => {
  let component: ArtistListItemProfileComponent;
  let fixture: ComponentFixture<ArtistListItemProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArtistListItemProfileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArtistListItemProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
