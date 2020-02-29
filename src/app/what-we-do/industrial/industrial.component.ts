import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-industrial',
  templateUrl: './industrial.component.html',
  styleUrls: ['./industrial.component.css']
})
export class IndustrialComponent implements OnInit {

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
