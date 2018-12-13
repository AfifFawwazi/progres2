import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Horoscope } from '../../horoscope.model';
import { HoroscopeService } from '../../horoscope.service';


@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {

  @Input() horoscope:Horoscope;
  // @Output() horoscopeSelected=new EventEmitter<void>();

  constructor(private horoscopeService:HoroscopeService) { }

  ngOnInit() {
  }

  onSelected(){
    // this.horoscopeSelected.emit();
    this.horoscopeService.horoscopeSelected.emit(this.horoscope);
  }

}
