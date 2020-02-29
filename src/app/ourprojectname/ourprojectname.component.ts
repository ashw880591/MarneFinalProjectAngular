import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ourprojectname',
  templateUrl: './ourprojectname.component.html',
  styleUrls: ['./ourprojectname.component.css']
})
export class OurprojectnameComponent implements OnInit {

  constructor(private route :Router) { }
  GoToOurProject(){
    this.route.navigate(['OurProject'])
  }
  ngOnInit() {
  }

}
