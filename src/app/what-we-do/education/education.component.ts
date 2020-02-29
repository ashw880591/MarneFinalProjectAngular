import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {

  constructor(private route:Router) { }
  GoToOurProjectNamePage(){
    this.route.navigate(['OurProjectName'])
  }
  GoToWhoWeArePage(){
    this.route.navigate(['WhoWeAre'])
  }
  ngOnInit() {
  }

}
