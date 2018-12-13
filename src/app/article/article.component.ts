import { Component, OnInit , EventEmitter, Output, Input} from '@angular/core';
import { Article } from './article.model';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {
  selectedArticle:Article;
  @Output() featureSelected= new EventEmitter<string>();
  onSelect(feature:string){
    this.featureSelected.emit(feature);
  }
  
    articles:Article[]=[
      
      new Article('ARIES','Ekspresi Cinta Berdasarkan Zodiak Aries','../src/img/article/a.jpg'),
      new Article('GEMINI','Ekspresi Cinta Berdasarkan Zodiak Gemini','../src/img/article/g.jpg'),
      new Article('CANCER','Ekspresi Cinta Berdasarkan Zodiak Cancer','../src/img/article/c.jpg'),
      new Article('LEO','Ekspresi Cinta Berdasarkan Zodiak Leo','../src/img/article/l.jpg'),
      new Article('VIRGO','Ekspresi Cinta Berdasarkan Zodiak Virgo','../src/img/article/v.jpg'),
      new Article('CAPRICORN','Ekspresi Cinta Berdasarkan Zodiak Capricorn','../src/img/article/ca.jpg'),
      new Article('AQUARIUS','Ekspresi Cinta Berdasarkan Zodiak Aquarius','../src/img/article/aq.jpg'),
     
     
      ];

  constructor() { }

  ngOnInit() {
  }

}
