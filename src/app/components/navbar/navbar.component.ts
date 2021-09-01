import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'tama-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class TamaNavbarComponent implements OnInit {
  public route: Array<{ title: string, path: string, enabled: boolean }> = [
    {
      title: "Home",
      path: "home",
      enabled: true
    },
    {
      title: "Catalog",
      path: "catalog",
      enabled: true
    },
    {
      title: "Payment Methods",
      path: "payment-method",
      enabled: false
    },
    {
      title: "Contact me",
      path: "contact-me",
      enabled: false
    },
  ];

  constructor() { }

  ngOnInit(): void { }
}
