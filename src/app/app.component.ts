import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
@Component({
  selector: 'ea-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'ea';
  public ngOnInit(){
    $(window).scroll(function() {
      if ($("nav").offset().top > 50) {
          $(".navbar-fixed-top").addClass("top-nav-collapse gold");
      } else {
          $(".navbar-fixed-top").removeClass("top-nav-collapse gold");
      }
  });
  }

}
