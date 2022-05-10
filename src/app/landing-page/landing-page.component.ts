import { Component, HostListener, OnInit } from '@angular/core';

import * as AOS from 'aos';


@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    AOS.init();
  
  }



}
