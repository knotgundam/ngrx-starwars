import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeaponViewerComponent } from './weapon-viewer.component';

describe('WeaponViewerComponent', () => {
  let component: WeaponViewerComponent;
  let fixture: ComponentFixture<WeaponViewerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeaponViewerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeaponViewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
