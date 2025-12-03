import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilmCrud } from './film-crud';

describe('FilmCrud', () => {
  let component: FilmCrud;
  let fixture: ComponentFixture<FilmCrud>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FilmCrud]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FilmCrud);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
