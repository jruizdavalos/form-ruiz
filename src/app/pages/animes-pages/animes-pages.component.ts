import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

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

}
