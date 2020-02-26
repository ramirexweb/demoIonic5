import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSegment } from '@ionic/angular';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-segment',
  templateUrl: './segment.page.html',
  styleUrls: ['./segment.page.scss'],
})
export class SegmentPage implements OnInit {

  superHeroes: any[];
  filtroSuperHeroes = '';

  @ViewChild(IonSegment, {
    static: true
  }) segment: IonSegment;

  constructor(
    private dataService: DataService
  ) { }

  ngOnInit() {
    this.segment.value = 'todos';

    this.dataService.getSuperHeroes()
      .subscribe(superHeroes => {
        this.superHeroes = superHeroes;
        console.log(this.superHeroes);
      })

    
  }

  segmentChanged(event: any) {
    const valorSegmento = event.detail.value;

    if ( valorSegmento === 'todos') {
      this.filtroSuperHeroes = '';
    } else {
      this.filtroSuperHeroes = valorSegmento;
    }
  }

}
