import { Component, OnInit, Input } from '@angular/core';
import { Horoscope } from '../horoscope.model';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
@Input() horoscope:Horoscope;
  constructor() { }

  ngOnInit() {
  }

  
}
