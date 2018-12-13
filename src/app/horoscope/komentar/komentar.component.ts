import { Component, OnInit, ElementRef, ViewChild, Output, EventEmitter } from '@angular/core';
import { Koment } from './koment.model'

@Component({
  selector: 'app-komentar',
  templateUrl: './komentar.component.html',
  styleUrls: ['./komentar.component.css']
})
export class KomentarComponent implements OnInit {

  @ViewChild('nameInput') nameRef:ElementRef;
  @ViewChild('komentarInput') komentarRef:ElementRef;
  @Output() komentAdded = new EventEmitter<Koment>();
  constructor() { }

  ngOnInit() {
  }

  onAddItem(){
    const komName=this.nameRef.nativeElement.value;
    const komKomentar=this.komentarRef.nativeElement.value;
    const newKoment=new Koment(komName, komKomentar);
    this.komentAdded.emit(newKoment);
  }

  koments:Koment[]=[      
    new Koment('Ayahanda','Kompor Gas gaann..!!'),
    new Koment('clalu dicayang','cemangat ceyus yacchh update nyah :)'),
  ];
}
