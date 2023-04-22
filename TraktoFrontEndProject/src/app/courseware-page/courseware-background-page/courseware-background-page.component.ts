import { Component } from '@angular/core';
import { DesignService } from 'src/app/services/design.service';

@Component({
  selector: 'app-courseware-background-page',
  templateUrl: './courseware-background-page.component.html',
  styleUrls: ['./courseware-background-page.component.sass']
})
export class CoursewareBackgroundPageComponent {

  constructor(private designService: DesignService) {

  }

  backOnWeeks(){
    console.log('teste1');
  }

  forwardOnWeeks(){
    console.log('teste2');
  }

  testeRequisicao() {

    this.designService.getAllDesign().subscribe({
      complete: () => {
        console.log("foi");
      },
      error: (err) => {
        console.log(err);
      }
    });
  }
}
