import { Component, OnInit } from '@angular/core';
import { PassarrayService } from '../passarray.service';

@Component({
  selector: 'app-emplist1',
  templateUrl: './emplist1.component.html',
  styleUrls: ['./emplist1.component.css']
})
export class Emplist1Component implements OnInit {

  empFetch!: any;

  constructor( private passarayservice: PassarrayService) { }

  ngOnInit(): void {
    this.empFetch = this.passarayservice.empData();
  }

}
