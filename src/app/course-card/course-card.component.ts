import { Component, OnInit , Input, Output, EventEmitter, ViewChild, AfterViewInit ,ContentChild} from '@angular/core';
import { Course } from '../model/course';
import { CourseImageComponent } from '../course-image/course-image.component';

@Component({
  selector: 'course-card',
  templateUrl: './course-card.component.html',
  styleUrls: ['./course-card.component.css']
})
export class CourseCardComponent implements OnInit , AfterViewInit{



  @Input()
  course :Course ;

  @Input()
  cardIndex : number;

  @Output('courseSelected')
  courseEmitter = new EventEmitter<Course>();

  @ContentChild(CourseImageComponent)
  image : CourseImageComponent;
  constructor() {    
  }
    ngAfterViewInit(): void {
        console.log(this.image)
    }

  ngOnInit() {
  }

  isImageVisible() {
      return this.course && this.course.iconUrl;
  }

  onCourseViewed() {

      this.courseEmitter.emit(this.course);

  }

  cardClasses() {
      if (this.course.category == 'BEGINNER') {
          return 'beginner';
      }
  }

  cardStyles() {
      return {
          'background-image': 'url(' + this.course.iconUrl + ')'

      };
  }
}
