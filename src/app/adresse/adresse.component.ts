import { Component, OnInit, Input } from '@angular/core';
import '~bootstrap/dist/css/bootstrap.min.css';

@Component({
  selector: 'app-adresse',
  templateUrl: './adresse.component.html',
  styleUrls: ['./adresse.component.css']
})
export class AdresseComponent implements OnInit {

  @Input () prenom : string = "";
  constructor() { }

  ngOnInit(): void {
  }

}
