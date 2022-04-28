import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtistListItemProfileEditComponent } from './artist-list-item-profile-edit.component';

describe('ArtistListItemProfileEditComponent', () => {
  let component: ArtistListItemProfileEditComponent;
  let fixture: ComponentFixture<ArtistListItemProfileEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArtistListItemProfileEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArtistListItemProfileEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
