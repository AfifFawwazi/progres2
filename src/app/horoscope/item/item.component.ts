import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { Horoscope } from '../horoscope.model';
import { HoroscopeService } from '../horoscope.service';


@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  // @Output() horoscopeWasSelected= new EventEmitter<Horoscope>();
  horoscopes:Horoscope[];
  
    
  constructor(private horoscopeService:HoroscopeService) { }

  ngOnInit() {
    this.horoscopes= this.horoscopeService.getHoroscopes();
  }

  // onHoroscopeSelected(horoscope:Horoscope){
  //   this.horoscopeWasSelected.emit(horoscope);
  // }
}
