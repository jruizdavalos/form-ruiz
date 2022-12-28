import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimesPagesComponent } from './animes-pages.component';

describe('AnimesPagesComponent', () => {
  let component: AnimesPagesComponent;
  let fixture: ComponentFixture<AnimesPagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnimesPagesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnimesPagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
