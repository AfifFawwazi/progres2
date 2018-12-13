import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { Horoscope } from './horoscope.model';
import { HoroscopeService } from './horoscope.service';

@Component({
  selector: 'app-horoscope',
  templateUrl: './horoscope.component.html',
  styleUrls: ['./horoscope.component.css'],
  providers: [HoroscopeService],
})
export class HoroscopeComponent implements OnInit {
selectedHoroscope:Horoscope;

  
    constructor(private horoscopeService:HoroscopeService) { }
  
   

  ngOnInit() {
    this.horoscopeService.horoscopeSelected
    .subscribe(
      (horoscope:Horoscope)=>{
        this.selectedHoroscope=horoscope;
      }
    )
  }

  
}
