import { Component, OnInit } from '@angular/core';
import { Client } from '../client';

@Component({
  selector: 'app-formulaire',
  templateUrl: './formulaire.component.html',
  styleUrls: ['./formulaire.component.css']
})
export class FormulaireComponent implements OnInit {

  validForm : boolean = false;
  afficherRecapitulatif : boolean = false;
  register : boolean = true;
  identifiant : string = "toto";
  password : string = "";
  confirm_password : string = "";
  client : Client = new Client();

  constructor() { }

 
  ngOnInit(): void {
  }

  verifyFields(){
    if(this.identifiant != ""){
      this.validForm = true;
      this.client.identifiant = this.identifiant;
    } else { this.validForm = false; }

    if(this.password != "" && this.confirm_password != "" && this.password === this.confirm_password){
      this.validForm = true;
      this.client.password = this.password;
    } else { this.validForm = false; }
  }

  valider() {
    if(this.validForm){
      this.afficherRecapitulatif = true;
    }
  }
}
