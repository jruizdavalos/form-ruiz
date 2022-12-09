import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { __values } from 'tslib';
import { debounceTime } from 'rxjs';

@Component({
  selector: 'app-main-form',
  templateUrl: './main-form.component.html',
  styleUrls: ['./main-form.component.css']
})

export class MainFormComponent implements OnInit {
  nameControl = new FormControl('', [Validators.required])
  lastNameControl = new FormControl('', [Validators.required])
  dateControl = new FormControl('', [Validators.required])
  genderControl = new FormControl('', [Validators.required])

  emailControl = new FormControl('', [Validators.required, Validators.email])
  textControl = new FormControl('', [Validators.required, Validators.minLength(6)])


  registerForm = new FormGroup({
    name: this.nameControl,
    lastName: this.lastNameControl,
    date: this.dateControl,
    gender: this.genderControl,
    email: this.emailControl,
    text: this.textControl,
  })
  constructor() {

  }

  ngOnInit() {
  }
  onSubmit() {
    console.log(this.registerForm.value)
  }

}
