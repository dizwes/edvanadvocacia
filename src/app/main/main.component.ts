import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'ea-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  title = 'ea';
  public ngOnInit() {
    $(window).scroll(function() {
      if ($(".title").offset().top > 80) {
          $(".title-sobre post").addClass(".animated .fadeInLeft");
      } else {
          $(".title-sobre post").addClass(".display-none");
      }
  });
  }
  }

