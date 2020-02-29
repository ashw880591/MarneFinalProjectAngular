import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-hospitality',
  templateUrl: './hospitality.component.html',
  styleUrls: ['./hospitality.component.css']
})
export class HospitalityComponent implements OnInit {

  constructor(private route :Router) { }

  GoToOurProjectNamePage(){
    this.route.navigate(['OurProjectName'])
  }

  GoToWhoWeArePage(){
    this.route.navigate(['WhoWeAre'])
  }
  ngOnInit() {
  }

}
