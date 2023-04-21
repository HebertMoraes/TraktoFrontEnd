import { Component } from '@angular/core';

@Component({
  selector: 'app-courseware-background-page',
  templateUrl: './courseware-background-page.component.html',
  styleUrls: ['./courseware-background-page.component.sass']
})
export class CoursewareBackgroundPageComponent {

  backOnWeeks(){
    console.log('teste1');
  }

  forwardOnWeeks(){
    console.log('teste2');
  }
}
