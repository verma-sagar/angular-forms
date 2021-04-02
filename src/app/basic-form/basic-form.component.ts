import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-basic-form',
  templateUrl: './basic-form.component.html',
  styleUrls: ['./basic-form.component.css']
})
export class BasicFormComponent implements OnInit {
  
  genders:string[];

  constructor() { }

  ngOnInit(): void {
    this.genders=['Male','Female','Transgender'];
  }

}
