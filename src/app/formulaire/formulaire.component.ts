import { Component, OnInit } from '@angular/core';
import '~bootstrap/dist/css/bootstrap.min.css';

@Component({
  selector: 'app-formulaire',
  templateUrl: './formulaire.component.html',
  styleUrls: ['./formulaire.component.css']
})
export class FormulaireComponent implements OnInit {

  valid1 : boolean = false;
  prenom : string = "toto";

  constructor() { }

  click() {
    console.log("click")
  }
  ngOnInit(): void {
  }

}
