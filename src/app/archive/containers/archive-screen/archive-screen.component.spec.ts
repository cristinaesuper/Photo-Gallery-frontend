import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArchiveScreenComponent } from './archive-screen.component';

describe('ArchiveScreenComponent', () => {
  let component: ArchiveScreenComponent;
  let fixture: ComponentFixture<ArchiveScreenComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ArchiveScreenComponent]
    });
    fixture = TestBed.createComponent(ArchiveScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
