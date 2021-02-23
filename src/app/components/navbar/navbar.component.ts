import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'tama-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class TamaNavbarComponent implements OnInit {
  public route: Array<string> = [
    "Home",
    "Catalog",
    "Payment Methods",
    "Contact me"
  ];

  constructor() { }

  ngOnInit(): void { }
}
