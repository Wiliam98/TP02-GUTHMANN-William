import { Component, OnInit, Input } from '@angular/core';
import { Client } from '../client';

@Component({
  selector: 'app-recap',
  templateUrl: './recap.component.html',
  styleUrls: ['./recap.component.css']
})
export class RecapComponent implements OnInit {

  @Input () client : Client = new Client();
  constructor() { }

  ngOnInit(): void {
  }
  
  hashPassword(password: string){
    return "*".repeat(password.length)
  }
}
