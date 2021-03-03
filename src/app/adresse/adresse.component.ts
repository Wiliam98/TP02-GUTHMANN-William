import { Component, OnInit, Input } from '@angular/core';
import { Client } from '../client';

@Component({
  selector: 'app-adresse',
  templateUrl: './adresse.component.html',
  styleUrls: ['./adresse.component.css']
})
export class AdresseComponent implements OnInit {

  @Input () prenom : string = "Jean";
  @Input () nom : string = "DUPONT";
  @Input () adresse : string = "15 rue des lilas";
  @Input () postal : number = 0;
  @Input () pays : string = "France";
  @Input () phone : string = "06XXXXXXXX";
  @Input () mail : string = "jeand.dupont@yahoo.fr";
  @Input () client : Client = new Client();

  
  constructor() { }

  ngOnInit(): void {
  }

  verifyFields(){
    this.prenom != "" ?this.client.prenom = this.prenom : null;
    this.nom != "" ? this.client.nom = this.nom : null;
    this.adresse != "" ? this.client.adresse = this.adresse : null;
    this.postal != 0 ? this.client.postal = this.postal : null;
    this.pays != "" ? this.client.pays = this.pays : null;
    this.phone != "" && this.phone.match("\[0-9]") ? this.client.phone = this.phone : null;
    this.mail != "" && this.phone.includes("@") ? this.client.mail = this.mail : null;
  }

}
