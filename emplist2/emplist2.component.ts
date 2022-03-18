import { Component, OnInit } from '@angular/core';
import { PassarrayService } from '../passarray.service';

@Component({
  selector: 'app-emplist2',
  templateUrl: './emplist2.component.html',
  styleUrls: ['./emplist2.component.css']
})
export class Emplist2Component implements OnInit {

  empFetch!: any;

  constructor( private passarayservice: PassarrayService) { }

  ngOnInit(): void {
    this.empFetch = this.passarayservice.empData();
  }

}
