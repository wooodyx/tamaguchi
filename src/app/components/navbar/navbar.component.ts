import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'tama-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class TamaNavbarComponent implements OnInit {
  public route: Array<{ title: string, path: string }> = [
    {
      title: "Home",
      path: "home"
    },
    {
      title: "Catalog",
      path: "catalog"
    },
    {
      title: "Payment Methods",
      path: "payment-method"
    },
    {
      title: "Contact me",
      path: "contact-me"
    },
  ];

  constructor() { }

  ngOnInit(): void { }
}
