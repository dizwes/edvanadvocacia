import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'ea-mobile-menu',
  templateUrl: './mobile-menu.component.html',
  styleUrls: ['./mobile-menu.component.scss']
})
export class MobileMenuComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $(".menu-toggle").on('click', function() {
      $(this).toggleClass("on");
      $('.menu-section').toggleClass("on");
      $("nav ul").toggleClass('hidden');
    });
  }

}
