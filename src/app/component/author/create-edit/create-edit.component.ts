import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Author } from 'src/app/model/authors';
import * as moment from 'moment';// add a mano

@Component({
  selector: 'app-create-edit',
  templateUrl: './create-edit.component.html',
  styleUrls: ['./create-edit.component.css']
})
export class CreateEditComponent implements OnInit {
  form : FormGroup = new FormGroup({});
  author : Author = new Author();
  mensaje : string = "";
  maxFecha: Date = moment().add(1, 'days').toDate();
  ngOnInit(): void {

  }

}
