import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-formulaire',
  templateUrl: './formulaire.component.html',
  styleUrls: ['./formulaire.component.css']
})
export class FormulaireComponent implements OnInit {

  public valid1 : boolean = false;

  constructor() { }

  click() {
    console.log("click")
  }
  ngOnInit(): void {
  }

}
