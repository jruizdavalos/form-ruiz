import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AnimeService } from '../../services/anime.service';
import { debounceTime, map } from 'rxjs';

@Component({
  selector: 'app-animes-pages',
  templateUrl: './animes-pages.component.html',
  styleUrls: ['./animes-pages.component.css']
})
export class AnimesPagesComponent {
  public searchControl = new FormControl('')
  public form = new FormGroup({
    serch: this.searchControl
  })
  constructor(private animeService: AnimeService) {
    this.searchControl.valueChanges
      .pipe(
        debounceTime(1000),
      )
      .subscribe((value) => {
        value && this.animeService.searchAnime(value).subscribe(console.log);
      })
  }
}
