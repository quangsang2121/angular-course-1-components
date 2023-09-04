import { Component, ElementRef, QueryList, ViewChildren } from '@angular/core';
import {COURSES} from '../db-data';
import { CourseCardComponent } from './course-card/course-card.component';
import { Course } from './model/course';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  courses = COURSES;


  @ViewChildren(CourseCardComponent)
  cards : QueryList<CourseCardComponent>;


  constructor() {

  }

  ngAfterViewInit() {

  }

  onCourseSelected(course:Course) {
    console.log(course.id);
  }


}
