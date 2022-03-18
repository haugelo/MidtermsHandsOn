import { Component, OnInit } from '@angular/core';
import { PassarrayService } from '../passarray.service';

@Component({
  selector: 'app-emplist3',
  templateUrl: './emplist3.component.html',
  styleUrls: ['./emplist3.component.css']
})
export class Emplist3Component implements OnInit {

  empFetch!: any;

  constructor( private passarayservice: PassarrayService) { }

  ngOnInit(): void {
    this.empFetch = this.passarayservice.empData();
  }

}
