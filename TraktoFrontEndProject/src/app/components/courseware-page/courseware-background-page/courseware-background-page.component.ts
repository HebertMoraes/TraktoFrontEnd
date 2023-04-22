import { Component } from '@angular/core';
import { DesignData } from 'src/app/entities/design-data';
import { DesignService } from 'src/app/services/design.service';

@Component({
  selector: 'app-courseware-background-page',
  templateUrl: './courseware-background-page.component.html',
  styleUrls: ['./courseware-background-page.component.sass']
})
export class CoursewareBackgroundPageComponent {

  designsThumbsToShow!: DesignData[];
  showTest = false;

  constructor(private designService: DesignService) {

  }

  ngOnInit() {
    this.getAllDesignThumbs();
  }

  ngAfterViewInit() {
    // this.getAllDesignThumbs();
  }

  backOnWeeks(){
    console.log('voltando');
  }

  forwardOnWeeks(){
    console.log('prosseguindo');
  }

  getAllDesignThumbs() {
    this.designService.getAllDesign().subscribe({
      next: (res) => {
        this.designsThumbsToShow = res.data;
      },
      error: (err) => {
        console.log(err);
      }
    });
  }
}
